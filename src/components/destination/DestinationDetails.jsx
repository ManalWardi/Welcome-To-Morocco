// DestinationDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DestinationCard from './DestinationCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from 'react-icons/ai';
import destinationsData from '../../destinations.json';
import classes from './productDetails.module.css';

const DestinationDetails = () => {
  const [destination, setDestination] = useState({});
  const [similarDestinations, setSimilarDestinations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchedDestination = destinationsData.find((item) => String(item._id) === id);

    if (fetchedDestination) {
      setDestination(fetchedDestination);

      const similarDestinations = destinationsData.filter(
        (item) => item.nomDestination !== fetchedDestination.nomDestination && item.nomCity == fetchedDestination.nomCity
      );
      setSimilarDestinations(similarDestinations);
    }
  }, [id]);

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
      <div className={classes.containerDetails}>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <img src={`/images/imgDestinations/${destination.imageDestination}`} alt={destination.nomDestination} />
          </div>
          <div className={classes.right}>
            <div className={classes.title}>
              <h3>{destination.nomDestination}</h3>
              <p>{destination.descriptionDestination}</p>
            </div>
            <div className={classes.rating}>
              <label>Rating: <AiFillStar className={classes.starIcon} /> {destination.rating}</label>
            </div>
          </div>
        </div>
      </div>
      <div className="similarDestinations">
        <h2>Other Destinations</h2>
        <div className="similarContainer">
          <Slider {...settings}>
            {similarDestinations.map((simDestination) => (
              <div className={`slick-slide-item`} key={simDestination._id}>
                <DestinationCard key={simDestination._id} destination={simDestination} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
