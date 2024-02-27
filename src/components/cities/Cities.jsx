import React, { useState } from 'react';

import { GlobalContext } from "../../context/GlobalState";
import CityCard from './CityCard';  // Make sure to import CityCard
import citiesData from '../../cities.json';  // Import citiesData
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './categories.module.css'

const Cities = () => {
  const [cities] = useState(citiesData);
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

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <hr className={classes.separator} />
          <h2>Cities</h2>
          <h5>Explore amazing cities</h5>
        </div>
        <div className="sliderContainer">
          <Slider {...settings} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {cities.map((city) => (
              <div className={`slick-slide-item`} key={city._id}>
                <CityCard key={city._id} city={city} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Cities;
