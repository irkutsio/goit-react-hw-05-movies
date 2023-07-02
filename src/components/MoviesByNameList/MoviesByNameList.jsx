import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieByNameList} from './MoviesByNameList.styled';

export const MoviesByNameList = ({ moviesByName }) => {
  const location = useLocation();

  return (
    <div>
      <MovieByNameList>
        {moviesByName.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </MovieByNameList>
    </div>
  );
};

MoviesByNameList.propTypes = {
  moviesByName: PropTypes.array.isRequired,
};
