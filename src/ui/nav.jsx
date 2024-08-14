import { BiCameraMovie } from "react-icons/bi";

import { CgProfile } from "react-icons/cg";
import Search from "../components/search";
import {  NavLink } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import useLogout from "../hook/useLogout";



const Nav = () => {
  const {authUser} = useAuthContext()

 const {logout}   = useLogout()

 

 const handleLogout = async()=> {
  await logout();
}



  return (
<section  className="hidden lg:flex items-center justify-center bg-[#151313] fixed z-10 w-full shadow-white">

 <div className="flex items-center justify-between p-[15px] w-[100%]">
    {/* logo */}
    <div className="flex items-center gap-[5px] cursor-pointer">

        <NavLink href="/">
        <BiCameraMovie  className="text-[45px] text-red-700" />
        </NavLink>

    <h1 className="text-red-700 font-[600] text-[18px] pt-[0.7rem]">Boxify</h1>
    </div>



    <div className="flex items-center absolute right-[35%] top-[32%] justify-center gap-[12px] ">
        

 
            <div  className="cursor-pointer">
<Search />
            </div>

   
  
     
    </div>


<div className="flex items-center gap-[10px]">

{authUser && 

<div className="flex gap-[5px] items-center">
<h1 className="text-red-500 flex gap-[5px]">Hello {authUser.userName}!</h1>
<i className="ri-door-open-line text-red-500 text-[28px] cursor-pointer" onClick={handleLogout}></i>
</div>

}


{!authUser && <div className="flex gap-[5px]">
  <h1 className="text-red-500 flex gap-[5px]">Account</h1>
  <CgProfile className="text-red-700 text-[20px]" />
  </div>}

</div>




 </div>
</section>
  )
}

export default Nav
