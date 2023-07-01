import { Route, Routes } from 'react-router-dom';
import { lazy} from "react";

// import HomePage from './pages/Home';
// import NotFound from 'components/pages/NotFound';
// import MovieDetails from 'components/pages/MovieDetails';
// import { Movies } from './pages/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout';


const HomePage = lazy(()=> import('./pages/Home'))
const NotFound = lazy(()=> import('./pages/NotFound'))
const MovieDetails = lazy(()=> import('./pages/MovieDetails'))
const Movies = lazy(()=> import('./pages/Movies'))



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
