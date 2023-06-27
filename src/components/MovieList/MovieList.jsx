import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => {
       
        return (
          <li key={movie.id}>
     
            <Link to={`${movie.id}`}>
              <p>{movie.name}</p>
            </Link>
          </li>
        );
      })}
    </div>
  );
};
