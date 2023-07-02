import PropTypes from 'prop-types';

import { MoviesByNameList } from 'components/MoviesByNameList/MoviesByNameList';
import { useEffect, useState } from 'react';
import { fetchMoviesByName } from 'services';
import { Loader } from 'components/Loader/Loader';

export const MovieList = ({ movieName }) => {
  const [moviesByName, setMoviesByName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    // if (moviesByName.length === 0) return;

    const getMoviesByName = async movieName => {
      setIsLoading(true);
      try {
        const fetchedMoviesByName = await fetchMoviesByName(movieName);
        if (fetchedMoviesByName.results.length === 0) {
          setIsEmpty(true);
        }
        setMoviesByName(fetchedMoviesByName.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieName) {
      getMoviesByName(movieName);
    }
  }, [movieName]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p> {error} </p>}
      {isEmpty && <div>There is no movie for your request</div>}

      <MoviesByNameList moviesByName={moviesByName} />
    </div>
  );
};

MovieList.propTypes = {
  movieName: PropTypes.string.isRequired,
};
