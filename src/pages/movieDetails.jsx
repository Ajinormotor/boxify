import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Review from '../components/reviews/review';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '7c1622b8e9c0b5b97fee3187ec32a5bf';
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        console.log(response.data)
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <section className="flex flex-col">


    <div className="movie-details relative">
      {movie && (
        <>
        
          <img className="w-full object-cover h-[500px]" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
          <h1  className="font-[700]">{movie.title}</h1>
          <p className="w-[100%]">{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </>
      )}

    </div>
    
    <div>
      <Review />
    </div>

    </section>
  );
};

export default MovieDetails;
