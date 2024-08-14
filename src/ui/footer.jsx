import { BiCameraMovie } from "react-icons/bi";

const Footer = () => {
  return (
<section  className="w-full flex flex-col bg-[#D1D0CF]">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full md:justify-items-center py-[3rem] px-[1rem] gap-[20px] ">

        {/* logo */}
        <div  className="flex flex-col">

       
        <div className="flex  items-center gap-[5px]">
    <BiCameraMovie  className="text-[45px] text-red-700" />
    <h1 className="text-red-700 font-[600] text-[18px] pt-[0.7rem]">Boxify</h1>
    </div>
    <ul className="lg:max-w-[350px] w-full">
      <li className="flex w-full text-[16px]">Email us: customer@boxify@gmail.com</li>
      <li>Call us: +234-90650-9789-45</li>
    </ul>
    </div>

    {/* Quick Link */}
    <div className="flex flex-col gap-[10px]">
      <h1>Quick Links</h1>
      <ul className="flex flex-col gap-[8px]">
      <li className="text-[] leading-[] md:text-[16px] md:leading-[20px] flex items-center"><i className="ri-arrow-right-s-line">About Us</i></li>
      <li className="text-[] leading-[] md:text-[16px] md:leading-[20px] flex items-center"><i className="ri-arrow-right-s-line">Movies </i></li>
      <li className="text-[] leading-[] md:text-[16px] md:leading-[20px] flex items-center"><i className="ri-arrow-right-s-line">About Us</i></li>
                
      </ul>

    </div>

       {/* Movies to watch*/}
       <div className="flex flex-col gap-[10px]">
      <h1>Movies To Watch</h1>
      <ul className="flex flex-col gap-[8px]">
      <li className="text-[] leading-[] md:text-[16px] md:leading-[20px] flex items-center"><i className="ri-arrow-right-s-line">Top Trending</i></li>
      <li className="text-[] leading-[] md:text-[16px] md:leading-[20px] flex items-center"><i className="ri-arrow-right-s-line">Recommended</i></li>
      <li className="text-[] leading-[] md:text-[16px] md:leading-[20px] flex items-center"><i className="ri-arrow-right-s-line">Popular</i></li>
                
      </ul>

    </div>

    {/* Newsletter */}

    <div className="flex flex-col gap-[8px]">
      <h1>Subscribe to Newsleetter</h1>

      <div className="borer-[1px] h-[8vh] border-black flex items-center justify-center">
      <input type="text" placeholder="Email*" className="w-full outline-none bg-black h-full text-[#f9f9f9] p-5px"/>
      <button className="bg-red-700 h-full text-[#f9f9f9] ">Subscribe</button>
      </div>
    
    </div>


  </div>

</section>
  )
}

export default Footer