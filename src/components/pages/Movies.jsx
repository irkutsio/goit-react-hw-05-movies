import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState } from 'react';

export const Movies = () => {
  const [movieName, setMouvieName] = useState('');

  const handleSearchSubmit = movie => {
    setMouvieName(movie);
  };

  return (
    <div>
      <SearchForm onSearchSubmit={handleSearchSubmit} />
      <MovieList movieName={movieName} />
    </div>
  );
};
