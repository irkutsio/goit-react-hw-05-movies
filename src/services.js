import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'ef36d9992b1df73aed22902d26d164a9';

export async function fetchMovies() {
  const respons = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
 return respons.data;
}

export async function fetchMoviesByName(query) {
  const respons = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return respons.data;
}

export async function fetchMoviesById(movieId) {
  const respons = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}`
  );
  return respons.data;
}

export async function fetchCast(movieId) {
  const respons = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return respons.data;
}

export async function fetchReviews(movieId) {
  const respons = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return respons.data;
}
