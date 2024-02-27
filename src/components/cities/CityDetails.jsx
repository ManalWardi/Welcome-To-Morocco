import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './productDetails.module.css';
import citiesData from '../../cities.json';
import destinationsData from '../../destinations.json';
import CityCard from './CityCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from 'react-icons/ai';
import DestinationCard from '../destination/DestinationCard';

const CityDetails = () => {
  const [city, setCity] = useState({});
  const [similarCities, setSimilarCities] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchedCity = citiesData.find((item) => String(item._id) === id);

    if (fetchedCity) {
      setCity(fetchedCity);

      // Filter similar cities based on some condition
      const similarCities = destinationsData.filter(
        (item) => item.nomCity == fetchedCity.title // Adjust the condition based on your data structure
      );
      setSimilarCities(similarCities);
    }
  }, [id]);

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
      <div className={classes.containerDetails}>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <img src={`/images/imgCities/${city.imageCity}`} alt={city.title} />
          </div>
          <div className={classes.right}>
            <div className={classes.title}>
              <h3>{city.title}</h3>
              <p>{city.descriptionCity}</p>
            </div>
            <div className={classes.rating}>
              <label>Rating: <AiFillStar className={classes.starIcon} /> {city.rating}</label>
            </div>
          </div>
        </div>
      </div>
      <div className="similarCities">
        <h2>Popular Destinations</h2>
        <div className="similarContainer">
          <Slider {...settings} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {similarCities.map((simCity) => (
              <div className={`slick-slide-item`} key={simCity._id}>
                <DestinationCard key={simCity._id} destination={simCity} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
