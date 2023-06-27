import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'fakeMovie';

const MovieDetails = () => {
  const { movieId } = useParams();

  const movie = getMovieById(movieId);
  console.log(movie);

  return (
    <div>
      <h3>MovieDetails</h3>
      <p>{movie.id}</p>
      <p>Name: {movie.name}</p>
      <p>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
        excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
        reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
        ipsum quos unde voluptatum?
      </p>
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
