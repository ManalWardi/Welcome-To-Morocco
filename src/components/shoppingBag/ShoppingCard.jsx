import React, { useContext } from 'react';
import classes from './explore.module.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

const ShoppingCard = ({ product, quantity }) => {
  const { addToShoppingBag, shoppingBag, removeFromShoppingBag } = useContext(GlobalContext);

  const isInShoppingBag = shoppingBag.some((item) => item._id === product._id);

  const handleAddToShoppingBag = () => {
    if (isInShoppingBag) {
      removeFromShoppingBag(product._id);
    } else {
      addToShoppingBag({ ...product, quantity });
    }
  };

  return (
    <div className={classes.card}>
      <Link to={`/product/${product._id}`} className={classes.link}>
        <img src={`/images/imgProd/${product.imgProd}`} className={classes.cardImage} />
      </Link>
      <div className={classes.cardBody}>
        
        <h3>{product.nomProd}</h3>
        <div className={classes.category}>{product.nomCategorie}</div>
        
        <div className={classes.quantity}>
          <label>Quantity: {product.quantity}</label>
        </div>
        <p>{product.prix}</p>
        <button className={classes.removeBtn} onClick={handleAddToShoppingBag}>
            {isInShoppingBag ? 'Remove From Cart' : 'Add to Cart'}
          </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
