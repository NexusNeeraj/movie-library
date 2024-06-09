import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import StartingPageContent from '../components/StartingPage/StartingPageContent';
import MoviesList from '../components/StartingPage/MoviesList';

const HomePage = (props) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  useEffect(() => { 
    fetchMovies();
  }, []);


  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=a8c159e&s=Batman`);
      //console.log(response.data);
      setMovies(response.data.Search || []);
      setNoMoviesFound(!response.data.Search || response.data.Search.length === 0);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data from OMDb API', error);
    }
  };

  

  const searchMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=a8c159e&s=${query}`);
      //console.log(response.data);
      if(response.data.Response === 'False'){
        setNoMoviesFound(true);
        setMovies([]);
      }else{
        setNoMoviesFound(false);
        setMovies(response.data.Search || []);
      }
    } catch (error) {
      console.error('Error fetching data from OMDb API', error);
    }
  };

  return (
    <Fragment>
      <StartingPageContent />
      {!isLoading && <MoviesList movies={movies} searchMovies={searchMovies} query={query} setQuery={setQuery} noMoviesFound={noMoviesFound} />}
      {isLoading && <p style={{textAlign: 'center', fontSize: '3rem'}}>Loading...</p>}
    </Fragment>
  );
};

export default HomePage;
