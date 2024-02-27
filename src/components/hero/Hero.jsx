import React from 'react'
import classes from './hero.module.css'
import image from '../../images/imgProd/Riad_a_Marrakech.jpg';
import image1 from '../../images/imgProd/artisanat.jpg';
import image2 from '../../images/imgProd/jamea.jpg';
import { Link } from 'react-router-dom'

function Hero() {
  

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>Discover Morocco, a land of diverse cultures, and vibrant traditions</h2>
          <h5>Experience the Beauty of Moroccan Culture</h5>
          <p className={classes.firstDesc}>You're invited to explore the enchanting destinations, <br />delight in unique experiences, and discover the artistry of Moroccan craftsmen and artisans.</p>
          <p className={classes.secondDesc}>Embark on a journey to uncover the treasures of Morocco.</p>
          <div className={classes.buttons}>
            <button>
              <Link to="/exploreDest" className={classes.link1}>
                Explore Destinations
              </Link>
            </button>
            <button>
              <Link to="/explore" className={classes.link2}>
                Explore Artisinal Products
              </Link>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={image} alt="Riad in Marrakech" />
          <div className={classes.Meal1}>
            <div className={classes.imgContainer}>
              <img src={image1}  />
            </div>
          </div>
          <div className={classes.Meal2}>
            <div className={classes.imgContainer}>
              <img src={image2}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero