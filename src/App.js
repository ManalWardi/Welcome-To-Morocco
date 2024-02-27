import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Favourite from './components/favourite/Favourite';
import { GlobalProvider } from './context/GlobalState';

import ProductDetails from './components/productDetails/ProductDetails';
import Explore from './components/explore/Explore';
import CityDetails from './components/cities/CityDetails';
import ShoppingBag from './components/shoppingBag/ShoppingBag';
import Footer from './components/footer1/Footer';
import DestinationDetails from './components/destination/DestinationDetails';
import ExploreDest from './components/exploreDestinations/ExploreDest';
import './App.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Add the app-container class */}
        <GlobalProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/exploreDest" element={<ExploreDest />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/city/:id" element={<CityDetails />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/shopping-bag" element={<ShoppingBag/>} /> 
          </Routes>
          <Footer />
        </GlobalProvider>
      </div>
    </Router>
  );
}

export default App;
