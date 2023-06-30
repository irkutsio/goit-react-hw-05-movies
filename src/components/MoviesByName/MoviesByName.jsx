import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MoviesByName = ({ moviesByName }) => {
  return (
    <div>
      <ul>
        {moviesByName.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MoviesByName.propTypes = {
  moviesByName: PropTypes.array.isRequired,
};
