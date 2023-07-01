import PropTypes from 'prop-types'

import { Link, useLocation } from 'react-router-dom';

export const TrandMoviesList = ({ trandMovies }) => {

  const location = useLocation();


  return (
    <ul>
      {trandMovies.map(movie => {
        return (
          <li  key={movie.id}>
            {' '}
            <Link to={`movies/${movie.id}`} state={{from:location}}>
              {movie.title}
            </Link>
          </li>
        
        );
      })}

    </ul>
   
  );
};


TrandMoviesList.propTypes = {
  trandMovies: PropTypes.array.isRequired
}