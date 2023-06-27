import { MovieList } from 'components/MovieList/MovieList';
import { getMovies } from 'fakeMovie';

const Movies = () => {
  const movies = getMovies();

  return (
    <div style={{ padding: '40px', color: 'blue' }}>
      <h2>Movie list</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
