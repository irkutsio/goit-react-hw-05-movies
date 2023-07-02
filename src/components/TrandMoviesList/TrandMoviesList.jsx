import PropTypes from 'prop-types';
import { Movie, MovieList } from './TrandMoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const TrandMoviesList = ({ trandMovies }) => {
  const location = useLocation();

  return (
    <>
      <h1 style={{ width: '300px', color: '#170b2a', fontSize: '26px' }}>Trand Movies for Today:</h1>
      <MovieList>
        {trandMovies.map(movie => {
          return (
            <Movie key={movie.id}>
              {' '}
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </Movie>
          );
        })}
      </MovieList>
    </>
  );
};

TrandMoviesList.propTypes = {
  trandMovies: PropTypes.array.isRequired,
};
