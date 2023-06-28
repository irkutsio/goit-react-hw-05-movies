import { Link } from 'react-router-dom';

export const TrandMoviesList = ({ trandMovies }) => {
  return (
    <ul>
      {trandMovies.map(movie => {
        return (
          <li  key={movie.id}>
            {' '}
            <Link to={`${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
