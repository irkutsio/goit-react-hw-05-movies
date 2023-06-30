import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId);
  }, [movieId]);

  const getCast = async movieId => {
    setIsLoading(true);
    try {
      const fetchedCast = await fetchCast(movieId);
      setCast(fetchedCast.cast);
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
      <ul>{cast.map(({profile_path,name,character,id}) => {
        return <li key={id}><h3>{name}</h3>
        <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
        <p>{character}</p>
        </li>
      })}</ul>
    </div>
  );
};
