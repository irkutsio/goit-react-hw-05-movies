import PropTypes from 'prop-types';

import { MoviesByNameList } from 'components/MoviesByNameList/MoviesByNameList';
import { useEffect, useState } from 'react';
import { fetchMoviesByName } from 'services';
import { Loader } from 'components/Loader/Loader';

export const MovieList = ({ movieName }) => {
  const [moviesByName, setMoviesByName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (moviesByName.length === 0) return;

    const getMoviesByName = async movieName => {
      setIsLoading(true);
      try {
        const fetchedMoviesByName = await fetchMoviesByName(movieName);
        setMoviesByName(fetchedMoviesByName.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByName(movieName);
  }, [movieName,moviesByName]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p> {error} </p>}
      {moviesByName.length === 0 ? (
        <div>There is no movie for your request</div>
      ) : (
        <MoviesByNameList moviesByName={moviesByName} />
      )}
    </div>
  );
};

MovieList.propTypes = {
  movieName: PropTypes.string.isRequired,
};
