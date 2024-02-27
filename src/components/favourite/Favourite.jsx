import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import classes from './favourite.module.css'
import { MyProductCard } from './MyProductCard'

function Favourite() {
  const {favouritelistproducts}=useContext(GlobalContext);
  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
      <h2>Your Favourite Products</h2>
      </div>
      {favouritelistproducts.length > 0 ? (
        <div className={classes.products}>
        {favouritelistproducts.map((product) => (
                <MyProductCard key={product._id} product={product} />
              ))}
        </div>

      ) : (
        <h3 className={classes.noRecipe}>No products in your list, add some!</h3>
      )}
      
    </div>
  )
}

export default Favourite