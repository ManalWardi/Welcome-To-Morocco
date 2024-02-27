import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { IoHeartDislikeOutline } from 'react-icons/io5';
import classes from './favourite.module.css';

export const MyProductCard = ({ product }) => {
  const { removeProductFromFavouritelist } = useContext(GlobalContext);

  const handleRemoveFromFavorites = (productId) => {
    removeProductFromFavouritelist(productId);
  };

  return (
    <div className={classes.card}>
      <Link to={`/product/${product._id}`} className={classes.link}>
        <img src={`/images/imgProd/${product.imgProd}`} alt={product.nomProd} className={classes.cardImage} />
      </Link>
      <div className={classes.cardBody}>
        <button onClick={() => handleRemoveFromFavorites(product._id)}>
          <IoHeartDislikeOutline className={classes.heartIcon} />
        </button>
        <h3>{product.nomProd}</h3>
      </div>
    </div>
  );
};
