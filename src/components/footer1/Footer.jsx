import React from 'react';
import classes from './footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
       

        <div className={classes.footerSection}>
          <h4>Explore</h4>
          <div className={classes.exploreLinks}>
            <a href="/">Home</a>
            <a href="/exploreDest">Destinations</a>
            <a href="/explore">Our Products</a>
            <a href="/favourite">Favourite Products</a>
          </div>
        </div>
        <div className={classes.footerSection}>
          <h4>Welcome To Morocco</h4>
          <span>Made by Manal Wardi & Wissal El Makkaoui &copy;2024</span>
        </div>
        
        <div className={classes.footerSection}>
          <h4>Connect With Us</h4>
          <div className={classes.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      
      </div>
    </footer>
  );
}

export default Footer;
