import PropTypes from 'prop-types'

export const MovieByIdInfo = ({ movie }) => {
  const { title, poster_path, overview, genres, vote_average } = movie;
  const genreNames =genres && genres.map(genre => genre.name);

  return (
    <div>
      <h2>{title}</h2>
      <p>Rating: {vote_average}</p>
      <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="poster" />
      {genreNames &&
          genreNames.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
      <p>{overview}</p>
      <ul>{}</ul>
    </div>
  );
};

MovieByIdInfo.propTypes = {
movie:PropTypes.object.isRequired
}