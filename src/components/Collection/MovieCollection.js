import React, { useContext } from 'react';

import MovieContext from '../../store/MovieContext';
import classes from './MovieCollection.module.css';

const MovieCollection = () => {
  const { collection } = useContext(MovieContext);

  return (
    <div className={classes.collectionContainer}>
      <h2>Your Movie Collection</h2>
      {collection.length === 0 ? (
        <p>No Movies in Collection.</p>
      ) : (
        <ul className={classes.collectionList}>
          {collection.map((movie) => (
            <li key={movie.imdbID} className={classes.collectionItem}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              {movie.Poster !== 'N/A' && <img src={movie.Poster} alt={movie.Title} className={classes.collectionPoster} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCollection;
