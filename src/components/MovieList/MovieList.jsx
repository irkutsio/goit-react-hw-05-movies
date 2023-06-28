import { useEffect } from 'react';
import { fetchMoviesByName } from 'services';

export const MovieList = ({ movieName }) => {
  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetchMoviesByName(movieName);
  }, [movieName]);

  return <div>{movieName}</div>;
};
