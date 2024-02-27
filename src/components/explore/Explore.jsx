import React, { useState, useEffect } from "react";
import classes from './explore.module.css';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';  // Assuming you have a ProductCard component
import productsData from '../../products.json';

function Explore() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);  // Changed variable name from "recipes" to "products"
  
  // search for the product (in this case, filtering local data)
  const searchProducts = () => {
    setIsLoading(true);
    const filteredProducts = productsData.filter(product =>
      product.nomProd.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    searchProducts();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchProducts();
  }

  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
      <h2>Our Artisinal Products</h2>
      </div>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className={classes.products}>
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))
        ) : (
          "No Results."
        )}
      </div>
    </div>
  );
}

export default Explore;
