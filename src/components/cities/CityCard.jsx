import React, { useContext } from 'react';
import classes from './explore.module.css';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { GlobalContext } from '../../context/GlobalState';
import { AiFillStar } from 'react-icons/ai';


const CityCard = ({ city }) => {


  return (
    <div className={classes.card}>
      <Link to={`/city/${city._id}`} className={classes.link}>
        <img src={`/images/imgCities/${city.imageCity}`} className={classes.cardImage} alt={city.title} />
      </Link>
      <div className={classes.cardBody}>
       
        <h3>{city.title}</h3>
        {/* <p>{city.descriptionCity}</p> */}
        <div className={classes.rating}>
          <AiFillStar className={classes.starIcon} />
          {city.rating}
        </div>
      </div>
    </div>
  );
};

export default CityCard;
