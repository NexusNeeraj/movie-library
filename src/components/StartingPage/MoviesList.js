import React, { useContext } from 'react';

import MovieContext from '../../store/MovieContext';
import styles from './MoviesList.module.css'; 

const MoviesList = ({ movies, searchMovies, query, setQuery, noMoviesFound}) => {
  const { addToCollection } = useContext(MovieContext);

  return (
    <div className={styles.moviesListContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className={styles.searchInput}
        />
        <button onClick={searchMovies} className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.moviesContainer}>
        {noMoviesFound ? (<p style={{color:'black', fontSize:'1.5rem'}}>No Movies Found.</p>) : (movies.map(movie => (
          <div key={movie.imdbID} className={styles.movieCard}>
            <h3 className={styles.movieTitle}>{movie.Title}</h3>
            <p className={styles.movieYear}>{movie.Year}</p>
            {movie.Poster !== 'N/A' && <img src={movie.Poster} alt={movie.Title} className={styles.moviePoster} />}
            <button onClick={() => addToCollection(movie)} className={styles.addButton}>Add to Collection</button>
          </div>
        )))}
      </div>
    </div>
  );
};

export default MoviesList;
