import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = ({ onSearchSubmit }) => {
  const [movie, setMovie] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handlechange = e => {
    const { value } = e.target;
    setMovie(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ name: movie });
    const query = searchParams.get('name');
    onSearchSubmit(query);
  };

  return (
    <div style={{ padding: '40px', color: 'blue' }}>
      <h2>Search film</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" onChange={handlechange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
