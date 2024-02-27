// DestinationCard.jsx
import React from 'react';
import classes from './explore.module.css';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const DestinationCard = ({ destination }) => {
  return (
    <div className={classes.card}>
      <Link to={`/destination/${destination._id}`} className={classes.link}>
        <img src={`/images/imgDestinations/${destination.imageDestination}`} className={classes.cardImage} alt={destination.nomDestination} />
      </Link>
      <div className={classes.cardBody}>
        <h3>{destination.nomDestination}</h3>
        <p>{destination.nomCity}</p>
        <div className={classes.rating}>
          <AiFillStar className={classes.starIcon} />
          {destination.rating}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
