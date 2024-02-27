import React, { useContext } from 'react';
import classes from './explore.module.css';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { GlobalContext } from '../../context/GlobalState';




const ProductCard = ({ product }) => {
  const { addProductToFavouritelist, removeProductFromFavouritelist, favouritelistproducts} = useContext(GlobalContext);

  const isFavourite = favouritelistproducts.some((o) => o._id === product._id);

  const handleHeartClick = () => {
    if (isFavourite) {
      removeProductFromFavouritelist(product._id);
    } else {
      addProductToFavouritelist(product);
    }
  };

  return (
    <div className={classes.card}>
      <Link to={`/product/${product._id}`} className={classes.link}>
       
        <img src={`/images/imgProd/${product.imgProd}`}  className={classes.cardImage} />
       
      </Link>
      <div className={classes.cardBody}>
        <button onClick={handleHeartClick}>
          <IoMdHeartEmpty className={`${classes.heartIcon} ${isFavourite ? classes.redHeart : ''}`} />
        </button>
        <span className={classes.category}>{product.nomCategorie}</span>
        <h3>{product.nomProd}</h3>
       
        <p>{product.prix}</p>
      </div>
    </div>
  );
};

export default ProductCard;
