import React, { useContext } from 'react';
import classes from './ShoppingBag.module.css';
import { GlobalContext } from '../../context/GlobalState';
import ShoppingCard from './ShoppingCard';
import { FiShoppingCart } from 'react-icons/fi';

const ShoppingBag = ({ onClose }) => {
  const { shoppingBag} = useContext(GlobalContext);

  const calculateTotal = () => {
    return shoppingBag.reduce((total, product) => total + parseFloat(product.prix) * product.quantity, 0);
  };

  return (
    <div className={classes.container}>
      
      <div className={classes.header}>
        <h2> <FiShoppingCart className={classes.listItem1}/> Your Shopping Bag </h2>
       
      </div>
      {shoppingBag.length > 0 ? (
        <>
      <div className={classes.products}>
         
        {shoppingBag.map((product) => (
          <ShoppingCard key={product._id} product={product}  />
        ))}
       
      </div>
      <div className={classes.shoppingBagTotal}>
      <p >Total: {calculateTotal()} DH</p>
      <button className={classes.orderBtn}>Order Now</button>
      </div>
      </>
      ) : (
        <h3 className={classes.noRecipe}>No products in your Shopping Bag, add some!</h3>
      )}
    </div>
   
  );
};

export default ShoppingBag;
