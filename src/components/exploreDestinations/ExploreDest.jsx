import React, { useState, useEffect } from "react";
import classes from './explore.module.css';
import SearchBar from './SearchBar';
import DestinationCard from "../destination/DestinationCard"; // Assurez-vous d'avoir une composante DestinationCard
import destinationsData from '../../destinations.json';

function ExploreDest() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [destinations, setDestinations] = useState([]);  // Utilisez un nom de variable approprié
  
  // Recherche des destinations (filtrage des données locales)
  const searchDestinations = () => {
    setIsLoading(true);
    const filteredDestinations = destinationsData.filter(destination =>
      destination.nomDestination.toLowerCase().includes(query.toLowerCase())
    );
    setDestinations(filteredDestinations);
    setIsLoading(false);
  };

  useEffect(() => {
    searchDestinations();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchDestinations();
  }

  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
        <h2>Explore Our Places</h2>
      </div>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className={classes.destinations}>
        {destinations.length > 0 ? (
          destinations.map(destination => (
            <DestinationCard
              key={destination._id}
              destination={destination}
            />
          ))
        ) : (
          "No Results."
        )}
      </div>
    </div>
  );
}

export default ExploreDest;
