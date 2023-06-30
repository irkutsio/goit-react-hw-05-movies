
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { fetchReviews } from 'services';

export const Reviews = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getReview(movieId);
  }, [movieId]);

  const getReview = async movieId => {
    setIsLoading(true);
    try {
      const fetchedReview = await fetchReviews(movieId);
      setReview(fetchedReview.results);
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
    <ul>
      {review.length > 0 ? (
        review.map((item) => (
          <li key={item.id}>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </li>
        ))
      ) : (
        <p>no reviews</p>
      )}
    </ul>
  </div>
  );
};

