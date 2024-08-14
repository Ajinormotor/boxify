import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [movieName, setMovieName] = useState([])

    const [filterMovieName,setFilterName] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const [searchClick, setSearchClick] = useState(false)

    const showSearch = () => {
        setSearchClick(!searchClick)
    }

useEffect(()=>{

const getMovieName = async() => {


    setLoading(true)
    try {

        const apiKey = '7c1622b8e9c0b5b97fee3187ec32a5bf';
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);

        const result = response.data;

        if (!result) {
          throw new Error('Data Not Fetched');
        }
        setMovieName(result.results)
        
    } catch (error) {

        console.error("Error:", error.message)
        setError(error.message)
    

    }finally {
        setLoading(false);
      }



}

getMovieName()

},[])

const handleFilter = (value) => {
    const res = movieName.filter(f => f.title.toLowerCase().includes(value.toLowerCase()));
    setFilterName(res);
    setSearchTerm(value)
}

const searchBarRef = useRef(null);

const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
    searchClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, );





  return (

    <section className="flex flex-col gap-[7px]">


    <div onClick={showSearch} className=" flex items-center border-[1px] border-[#f9f9f9] rounded-[5px] p-[7px] w-full lg:w-[400px]">
    <input type="search" placeholder=""
    value={searchTerm}
    onChange={(e)=>handleFilter(e.target.value)} className="bg-transparent  outline-none text-white text-[12px] w-[100%]" 
    
    />
    <FaSearchengin  className="text-red-700 text-[20px] md:block hidden"/>
    </div>


    <div>
          {loading && (
            <div>
              <span>Loading</span>
            </div>
          )}
        </div>

        {/* mapping with the result */}


{ searchClick && 
    <div className="bg-whitte border-[1px] border-[white] w-[400px] overflow-y-hidden h-[6vh]">

{filterMovieName.map((mn)=>(
    <div key={mn.id} className="flex bg-white py-[1rem] ">
            <h1 className="w-[90%]  text-black font-bold font-libre cursor-pointer"><Link to={`/moviedetails/${mn.id}`}>{mn.title}</Link></h1>
    </div>
))}
    </div>


}

    {error && <div className="text-white text-[20px]">{error}</div>}

    </section>

  )
}

export default Search