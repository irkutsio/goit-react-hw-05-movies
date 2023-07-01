import PropTypes from 'prop-types';
import { Genres, Container,Descr } from './MovieByIdInfo.styled';

export const MovieByIdInfo = ({ movie }) => {
  const { title, poster_path, overview, genres, vote_average } = movie;
  const genreNames = genres && genres.map(genre => genre.name);

  return (
    <Container>
      <div>
        {' '}
        <h2>{title}</h2>
        <p>Rating: {vote_average}</p>
        <img
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          alt="poster"
        />
      </div>
      <Descr>
    
        <Genres>
          {genreNames &&
            genreNames.map((genre, index) => <li key={index}>{genre}/</li>)}
        </Genres>
        <p>{overview}</p>
      </Descr>
    </Container>
  );
};

MovieByIdInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
