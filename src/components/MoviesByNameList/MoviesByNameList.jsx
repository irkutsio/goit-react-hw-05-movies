import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MoviesByNameList = ({ moviesByName }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {moviesByName.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MoviesByNameList.propTypes = {
  moviesByName: PropTypes.array.isRequired,
};
