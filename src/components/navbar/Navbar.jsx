// Navbar.jsx

import React, { useState, useContext } from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { GlobalContext } from '../../context/GlobalState';
import logo from '../../images/imgProd/logoSite.jpeg'

function Navbar() {
  const { shoppingBag } = useContext(GlobalContext);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.left}>
        <img src={logo} alt="Logo" className={classes.logo} />
        </Link>
        <div className={`${classes['menu-icon']} ${menuActive ? classes.active : ''}`} onClick={toggleMenu}>
          {menuActive ? <IoMdClose /> : <IoMdMenu />}
        </div>
        <ul className={`${classes.center} ${menuActive ? classes.active : ''}`}>
          <li>
            <Link to="/" className={classes.listItem} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/exploreDest" className={classes.listItem} onClick={closeMenu}>
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/explore" className={classes.listItem} onClick={closeMenu}>
              Our Products
            </Link>
          </li>
          <li>
            <Link to="/favourite" className={classes.listItem} onClick={closeMenu}>
              Favourite Products
            </Link>
          </li>
          <li className={classes.shoppingBag}>
           
          </li>
        </ul>
        <Link to="/shopping-bag"  onClick={closeMenu}>
              <FiShoppingCart className={classes.listItem1}/>
              <span className={classes.badge}>{shoppingBag.length}</span>
            </Link>
      </div>
    </div>
  );
}

export default Navbar;
