import React from 'react'

import { useState } from 'react'

import classes from './categories.module.css'

import { GlobalContext } from "../../context/GlobalState";
import ProductCard from '../explore/ProductCard';
import categoriesData from '../../categoriesProd.json';
import productsData from '../../products.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [activeCategory, setActiveCategory] = useState('All');
  const [products, setProducts] = useState(productsData);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.nomCategorie);

    // Filter products based on the selected category
    if (category.nomCategorie === "All") {
      // If "Tout" is selected, show all products
      setProducts(productsData);
    } else {
      const filteredProducts = productsData.filter(
        (product) => product.nomCategorie === category.nomCategorie
      );
      setProducts(filteredProducts);
    }
  };
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
        breakpoint: 768, // Taille de l'écran à laquelle la configuration change
        settings: {
          slidesToShow: 3, // Affiche un seul élément à la fois sur des écrans plus petits
        },
      },
      {
        breakpoint: 600, // Taille de l'écran à laquelle la configuration change
        settings: {
          slidesToShow: 2, // Affiche un seul élément à la fois sur des écrans plus petits
        },
      },
      {
        breakpoint: 500, // Taille de l'écran à laquelle la configuration change
        settings: {
          slidesToShow: 1, // Affiche un seul élément à la fois sur des écrans plus petits
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
  

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <hr className={classes.separator} />
          <h2>Artisinal Products</h2>
          <h5>Choose what suits you</h5>
        </div>
        <div className={classes.categories}>
          {categories?.map((category) => (
            <div
              onClick={() => handleCategoryClick(category)}
              className={`${classes.category} ${activeCategory === category.nomCategorie && classes.active}`}
              key={category._id}
            >
              {category.nomCategorie}
            </div>
          ))}
        </div>
      <div className="sliderContainer">
        <Slider {...settings}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
          {products.map((product) => (
            <div className={`slick-slide-item ${classes.customMargin}`} key={product._id}>
            <ProductCard key={product._id} product={product} />
            </div>
          ))}
         
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;