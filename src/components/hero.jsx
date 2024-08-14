import Slider from "react-slick"
import "../styles/hero.css"

import { CiPlay1 } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { LiaImdb } from "react-icons/lia";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        loop:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        swipeToSlide:true,
          afterChange: () => {
            AOS.refreshHard();
        },


      };

      useEffect(() => {
        AOS.init();
      }, []);
    


  return (
 <section  className="h-[100vh]  w-[100%] overflow-x-hidden ">
   <Slider  className="h-[100%] overflow-hidden" {...settings}>

      <div className="wolverine-bg flex items-center justify-center md:pl-[2rem]">
  <Wolverine />
      </div>

      {/* badBoys */}
      <div className="badboys-bg md:pl-[2rem]">
     <Badboys />
      </div>

      {/* House Of dragopn */}
      <div className="houseofdragons-bg md:pl-[2rem]">
 <HouseofDragon />
      </div>

    
    </Slider>
 </section>
  )
}

export default Hero


// Bad boys


const Badboys = () => {
    return(
        <div className="flex flex-col gap-[20px]  justify-center h-[100%] p-[10px]">

        <div className="flex items-center gap-[5px]"  >
        <h1 data-aos="fade-right" 
 data-aos-duration="1000"  className="md:text-[60px] text-[30px] font-libre text-[#f9f9f9]" >Bad Boys</h1>
        <span className="text-gray-300 md:text-[30px]">(2024)</span>
        </div>

    
    <div  data-aos="fade-right" 
 data-aos-duration="1500"  className="flex flex-col md:flex-row gap-[10px] md:items-center">

<div className="flex gap-[10px]">
    
        <ul  className="flex gap-[5px]">
            <li><IoMdStar className="text-yellow-500" /></li>
            <li><IoMdStar className="text-yellow-500" /></li>
            <li><IoMdStar className="text-yellow-500" /></li>
            <li><IoMdStar className="text-yellow-500" /></li>
            <li><IoMdStar className="text-yellow-500" /></li>
        </ul>
    
    <h1 className="text-[#f9f9f9]">4/5</h1>
    </div>

    <div className="flex gap-[10px]">
    <div className="w-[100px]  h-[40px]">
    <LiaImdb className="bg-yellow-400 lg:text-[40px] leading-[40px] w-full h-full"/>
    </div>
     
    <button className="bg-red-600 w-[100px] h-[40px] text-center text-[#f9f9f9] flex items-center justify-center gap-[5px]">Action</button>
    </div>
    <h1  className="text-[#f9f9f9]">2hr 6mins</h1>
    
    </div>
    <p data-aos="fade-right" 
 data-aos-duration="1500"  className="text-[#f9f9f9] lg:max-w-[652px] w-full">Marcus Burnett is a henpecked family man. Mike Lowry is a footloose and fancy free ladies man. Both Miami policemen, they have 72 hours to reclaim a consignment of drugs stolen from under
        their station nose. To complicate matters, in order to get the assistance of the sole witness to a murder, they have to pretend to be each other.</p>


        <h1 className="text-red-700">Genres: <span className="text-[#f9f9f9]">Sci-Fi & Fantasy, Drama, Action & Adventure</span></h1>
       


        <button data-aos="fade-right" 
 data-aos-duration="1500" className="bg-red-600 w-[120px] h-[50px] text-center text-[#f9f9f9] flex items-center justify-center gap-[5px]">Play Now <CiPlay1 /></button>
            </div>
    )
}

const Wolverine = () => {
    return(
        <div className="flex flex-col gap-[32px] justify-center h-[100%] p-[10px]">
<h1  className="md:text-[60px] text-[30px] font-libre text-[#f9f9f9]" data-aos="fade-right" 
 data-aos-duration="1000">Wolverine</h1>

<div data-aos="fade-right" 
 data-aos-duration="1500"  className="flex md:flex-row flex-col gap-[10px] md:items-center">

    <div className="flex gap-[10px]">



    <ul   className="flex gap-[5px]">
        <li><IoMdStar className="text-yellow-500" /></li>
        <li><IoMdStar className="text-yellow-500" /></li>
        <li><IoMdStar className="text-yellow-500" /></li>
        <li><IoMdStar className="text-yellow-500" /></li>
        <li><IoMdStar className="text-yellow-500" /></li>
    </ul>

<h1 className="text-[#f9f9f9]">4.3/5</h1>

</div>

<div className="flex  gap-[10px]">
<div className="w-[100px]  h-[40px]">
<LiaImdb className="bg-yellow-400 lg:text-[40px] leading-[40px] w-full h-full"/>
</div>
 
<button className="bg-red-600 w-[100px] h-[40px] text-center text-[#f9f9f9] flex items-center justify-center gap-[5px]">Action</button>
</div>

<h1  className="text-[#f9f9f9]">2hr 6mins</h1>

</div>
<p className="text-[#f9f9f9] lg:max-w-[652px] w-full" data-aos="fade-right" 
 data-aos-duration="2000">A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary,
     Deadpool, behind him. But when his homeworld 
    faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.</p>


<div className="flex flex-col gap-[10px]" data-aos="fade-right" 
 data-aos-duration="2200" >


    <h1  className="text-red-700">Genres: <span className="text-[#f9f9f9]">Sci-Fi & Fantasy, Drama, Action & Adventure</span></h1>
    <button  className="bg-red-600 w-[130px] h-[50px] text-center text-[#f9f9f9] flex items-center justify-center gap-[5px]">Play Now <CiPlay1 /></button>

</div>
        </div>
    )
}


const HouseofDragon= () => {
    return(
        <div className="flex flex-col gap-[22px] justify-center h-[100%] p-[10px]">

            <div className="flex items-center gap-[5px] pt-[2.5rem] md:pt-0">
            <h1 data-aos="fade-right" 
 data-aos-duration="1000"  className="md:text-[60px] text-[30px] font-libre text-[#f9f9f9]">House Of Dragon</h1>
            <span className="text-gray-300 md:text-[30px]">(2022)</span>
            </div>

        
        <div data-aos="fade-right" 
 data-aos-duration="1500" className="flex flex-col md:flex-row gap-[10px] md:items-center">

    <div className="flex gap-[10px]">

    <ul  className="flex gap-[5px]">
                <li><IoMdStar className="text-yellow-500" /></li>
                <li><IoMdStar className="text-yellow-500" /></li>
                <li><IoMdStar className="text-yellow-500" /></li>
                <li><IoMdStar className="text-yellow-500" /></li>
                <li><IoMdStar className="text-yellow-500" /></li>
            </ul>
        
        <h1 className="text-[#f9f9f9]">4.8/5</h1>
    </div>
        

    <div className="flex gap-[10px]">

        <div className="w-[100px]  h-[40px]">
        <LiaImdb className="bg-yellow-400 lg:text-[40px] leading-[40px] w-full h-full"/>
        </div>
         
        <button className="bg-red-600 w-[100px] h-[40px] text-center text-[#f9f9f9] flex items-center justify-center gap-[5px]">Adventure</button>
        </div>
        <h1  className="text-[#f9f9f9]">2hr 6mins</h1>
        
        </div>
        <p data-aos="fade-right" 
 data-aos-duration="2000" className="text-[#f9f9f9] lg:max-w-[652px] w-full">The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. 
            But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.</p>


            <h1 data-aos="fade-right" 
 data-aos-duration="2200" className="text-red-700">Genres: <span className="text-[#f9f9f9]">Sci-Fi & Fantasy, Drama, Action & Adventure</span></h1>
           


            <button data-aos="fade-right" 
 data-aos-duration="2500" className="bg-red-600 w-[120px] h-[50px] text-center text-[#f9f9f9] flex items-center justify-center gap-[5px]">Play Now <CiPlay1 /></button>
                </div>
    )
}

