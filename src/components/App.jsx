import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

import NotFound from 'components/pages/NotFound';

import MovieDetails from 'components/pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout';
import { Movies } from './pages/Movies';

export const App = () => {
  return (
    <div
      style={{
        padding: '60px',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
