import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import classes from './productDetails.module.css';
import productsData from '../../products.json';
import ProductCard from '../explore/ProductCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GlobalContext } from '../../context/GlobalState';

const ProductDetails = () => {
  const { addToShoppingBag, shoppingBag, removeFromShoppingBag } = useContext(GlobalContext);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [similarProducts, setSimilarProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchedProduct = productsData.find((item) => String(item._id) === id);

    if (fetchedProduct) {
      setProduct(fetchedProduct);

      // Filter similar products based on category
      const similarProds = productsData.filter(
        (item) => item.idCategorie === fetchedProduct.idCategorie && item._id !== fetchedProduct._id
      );
      setSimilarProducts(similarProds);
    }
  }, [id]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity)); // Ensure quantity is at least 1
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(Math.max(1, quantity - 1)); // Ensure quantity is at least 1
  };

  const isProductInShoppingBag = shoppingBag.some((item) => item._id === product._id);

  const [autoplay, setAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <div className="slick-arrow slick-next">Next</div>,
    prevArrow: <div className="slick-arrow slick-prev">Prev</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
    setIsHovered(false);
  };

  const handleAddToShoppingBag = () => {
    if (isProductInShoppingBag) {
      removeFromShoppingBag(product._id);
    } else {
      addToShoppingBag({ ...product, quantity });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerDetails}>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <img src={`/images/imgProd/${product.imgProd}`} alt={product.nomProd} />
          </div>
          <div className={classes.right}>
            <div className={classes.title}>
              <h3>{product.nomProd}</h3>
              <h4>{product.nomCategorie}</h4>
            </div>
            <div className={classes.description}>
              <p>{product.description}</p>
              <p className={classes.price}>{product.prix}</p>
            </div>
            <div className={classes.quantity}>
              <div className={classes.quantityControls}>
                <label>Quantity:</label>
                <button onClick={decrementQuantity}>-</button>
                <input
                  type="text"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
                />
                <button onClick={incrementQuantity}>+</button>
              </div>
              <button
                className={`${classes.addToCartBtn} `}
                onClick={handleAddToShoppingBag}
                
              >
                {isProductInShoppingBag ? 'Remove From Cart' : `Add to Cart (${quantity})`}
             
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="similarProducts">
        <h2>Similar Products</h2>
        <div className="similarContainer">
          <Slider {...settings} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {similarProducts.map((simProd) => (
              <div className={`slick-slide-item`} key={simProd._id}>
                <ProductCard key={simProd._id} product={simProd} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
