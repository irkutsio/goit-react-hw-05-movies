import { TrandMoviesList } from 'components/TrandMoviesList/TrandMoviesList';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'services';

const HomePage = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrandingMovie = async () => {
      setIsLoading(true);
      try {
        const fetchedTrandingMovies = await fetchMovies();
        setTrandingMovies(fetchedTrandingMovies.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getTrandingMovie();
  }, []);


// console.log(trandingMovies)

  return (
    <>
      {isLoading && <p>Loading......</p>}
      {error && <p>{error}</p>}
      <div style={{ padding: '40px', color: 'red', backgroundColor: 'beige' }}>
        Home page
      </div>
     <TrandMoviesList trandMovies={trandingMovies}/>
    </>
  );
};

export default HomePage;
