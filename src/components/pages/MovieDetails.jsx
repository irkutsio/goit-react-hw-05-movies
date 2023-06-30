import { Loader } from 'components/Loader/Loader';
import { MovieByIdInfo } from 'components/MovieByIdInfo/MovieByIdInfo';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId);
  }, [movieId]);

  const getMovieById = async movieId => {
    setIsLoading(true);
    try {
      const fetchedMovieById = await fetchMoviesById(movieId);
      setMovie(fetchedMovieById);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <Loader/>}
      {error && <p>{error} </p>}
      <MovieByIdInfo movie={movie} />

      <ul>
        {' '}
        <li>
          <Link to="cast">see the Cast </Link>
        </li>
        <li>
          <Link to="reviews">see all Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
