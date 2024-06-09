import React, { useState } from 'react';

const MovieContext = React.createContext({
  collection: [],
  addToCollection: (movie) => {}
});

export const MovieProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);

  const addToCollection = (movie) => {
    setCollection((prevCollection) => {
      if (!prevCollection.some((m) => m.imdbID === movie.imdbID)) {
        return [...prevCollection, movie];
      }
      return prevCollection;
    });
  };

  return (
    <MovieContext.Provider value={{ collection, addToCollection }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
