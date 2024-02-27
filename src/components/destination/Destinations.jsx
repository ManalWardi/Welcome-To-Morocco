// Destinations.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import DestinationCard from './DestinationCard';
import destinationsData from '../../destinations.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './categories.module.css';

const Destinations = () => {
  const [destinations] = useState(destinationsData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <hr className={classes.separator} />
          <h2>Destinations</h2>
          <h5>Explore amazing destinations</h5>
        </div>
        <div className="sliderContainer">
          <Slider {...settings}>
            {destinations.map((destination) => (
              <div className={`slick-slide-item ${classes.customMargin}`} key={destination._id}>
                <DestinationCard key={destination._id} destination={destination} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
