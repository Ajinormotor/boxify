import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movie = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const itemPerPage = 8;
  useEffect(() => {
    const getMovie = async (page) => {
      setLoading(true);

      try {
        const apiKey = '7c1622b8e9c0b5b97fee3187ec32a5bf';
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=${page}`);

        const result = response.data;

        if (!result) {
          throw new Error('Data Not Fetched');
        }

        const movieResult = result.results;
       

        setLoading(false);
        setMovies(movieResult);
        setTotalPages(result.total_pages); // Update the total pages
      } catch (error) {
        console.error('error.message:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovie(currentPage);
  }, [currentPage]);

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };


  const currentMovies = movies.slice(((currentPage - 1) * itemPerPage),(currentPage * itemPerPage))
  return (
    <section className="my-[2rem] p-[10px]">
      <div className="flex flex-col">
        {/* Heading */}
        <div className="my-[1rem]">
          <h1 className="md:text-[40px] md:leading-[45px] font-[600]">Trending Movies</h1>
        </div>

        {/* mapping the data */}
        <div>
          {loading && (
            <div>
              <span>Loading</span>
            </div>
          )}

          <div className="grid grid-cols-3 lg:grid-cols-4 w-[100%] gap-[10px]">
            {currentMovies.map((m) => (
              <div key={m.id} className="flex flex-col shadow-lg h-[270px] items-center justify-center gap-[8px]">
                <div className="w-[150px] h-[150px]">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                    alt="movie_pics"
                    className="w-full h-full"
                  />
                </div>
                <h1 className="w-[90%] text-center font-bold font-libre cursor-pointer"  ><Link to={`/moviedetails/${m.id}`}>{m.title}</Link></h1>
                <p className="opacity-[70%] flex items-center justify-center text-center w-[100%]">
                  {truncateTitle(m.overview, 50)}
                </p>
              </div>
            ))}
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

        {/* Adding Pagination */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 mx-1 bg-gray-300 text-black rounded disabled:opacity-50"
          >
         <i className="ri-arrow-left-s-line"></i>
          </button>
          <span className="px-4 py-2">{currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 mx-1 bg-gray-300 text-black rounded disabled:opacity-50"
          >
               <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Movie;
