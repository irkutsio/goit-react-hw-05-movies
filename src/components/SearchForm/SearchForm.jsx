import PropTypes from 'prop-types';
import { HiOutlineSearch } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form } from './SearchForm.styled';


export const SearchForm = ({ onSearchSubmit }) => {
  const [movie, setMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') || '';
    onSearchSubmit(query);
  }, [searchParams, onSearchSubmit]);

  const handleChange = e => {
    const { value } = e.target;
    setMovie(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!movie) {
      setSearchParams({});
    } else {
      setSearchParams({ query: movie });
    }
  };

  return (
    <Form >
      <h2 style={{color:'#170b2a'}}>Find movie by word:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" onChange={handleChange} />
        <button type="submit">
          <HiOutlineSearch size="17" />
        </button>
      </form>
    </Form>
  );
};

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};
