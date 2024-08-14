import { FaSearchengin } from "react-icons/fa";

import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../components/search";

const MobileNav = () => {
const  [searchClick, setSearchClick] = useState(false)

const handleSearchClick = () =>{
  setSearchClick(!searchClick)
}


  return (
    <section className="flex w-full h-[7vh] items-center justify-between px-[1rem] md:hidden">

      <div  className="flex items-center justify-between w-full">
          {/* logo */}
  <div className="flex items-center gap-[5px]">

<Link to="/">
<BiCameraMovie  className="text-[45px] text-red-700" />
</Link>

<h1 className="text-red-700 font-[600] text-[18px] pt-[0.7rem]">Boxify</h1>
</div>

<div  onClick={handleSearchClick}>
<FaSearchengin   className="text-red-700 text-[25px] cursor-pointer block"/>
</div>


      </div>


    {
searchClick?
  <div className="absolute top-[9%] left-0 z-20 w-full">
<Search />
</div>

:


<div>

</div>
 
    }



    </section>
  )
}

export default MobileNav
