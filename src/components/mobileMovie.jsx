import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const MobileMovie = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);

      try {
        const apiKey = '7c1622b8e9c0b5b97fee3187ec32a5bf';
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);

        const result = response.data;

        if (!result) {
          throw new Error('Data Not Fetched');
        }

        const movieResult = result.results;
       

        setLoading(false);
        setMovies(movieResult);
     
      } catch (error) {
        console.error('error.message:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, []);

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    loop:true,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    swipeToSlide:true,
  };


  return (
    <section className="my-[2rem] p-[10px]">
      <div className="flex flex-col">
        {/* Heading */}
        <div className="my-[1rem]">
          <h1 className="md:text-[40px] md:leading-[45px] font-[700]">Trending Movies</h1>
        </div>

        {/* mapping the data */}
        <div>
          {loading && (
            <div>
              <span>Loading</span>
            </div>
          )}

          <div className="">

          <Slider  className="h-[100%] w-full absolute overflow-hidden gap-[10px] overflow-x-hidden" {...settings}>
            {movies.map((m) => (
              <div key={m.id} className="flex flex-col shadow-lg h-[300px] items-center justify-center gap-[17px] p-[0.7rem]">
                <div className="w-[90%] h-[150px] items-center flex justify-center">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                    alt="movie_pics"
                    className="w-full h-full  object-fill"
                  />
                </div>
                <h1 className="w-[90%] text-center font-[700] font-libre cursor-pointer text-[13px] py-[0.7rem]"  ><Link to={`/moviedetails/${m.id}`}>{m.title}</Link></h1>
                <p className="opacity-[70%] flex items-center justify-center text-center w-[100%] text-[12px]">
                  {truncateTitle(m.overview, 50)}
                </p>
              </div>
            ))}

            </Slider>
          </div>

        </div>

        {/* error message */}
        {error? 
          <div>
            <span>{error}</span>
          </div>

          :

        ""
    }

     

      </div>
    </section>
  );
};

export default MobileMovie;
