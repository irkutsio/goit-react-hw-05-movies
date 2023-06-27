export const TrandMoviesList = ({ trandMovies }) => {
  return (
    <ul>
      {trandMovies.map(movie => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </ul>
  );
};
