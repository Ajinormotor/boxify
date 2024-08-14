
import { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hook/useLogin";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const navigate = useNavigate();

const {login, loading} = useLogin()
const [ userName, setUserName] = useState("");
const [ password, setPassword] = useState("")
  
  const handleLogin = async(e) => {
    e.preventDefault();

    await login({userName,password});
       navigate("/");
     
    


  }

  return (
<section className="bg-black w-full h-full   items-center justify-center flex relative overflow-x-hidden">
  
  <div  className="flex flex-col items-center justify-center w-[90%] lg:w-[50%] h-[20%] border-[1px] border-red-500 mt-[7rem]  mb-[5rem]  md:pt-[5rem]">
    {/* Heading */}
    <div  className="flex gap-[10px] items-center">

<BiCameraMovie  className="text-[45px] text-red-700" />
<h1 className="text-red-700 font-[800] text-[20px] md:text-[28px] pt-[0.7rem]">Login</h1>
    </div>


{/* Form and input */}
    <div>
      <form className="flex flex-col  gap-[20px]  p-[10px]" onSubmit={handleLogin}>


{/* UserName */}
<div className="">
          <label type="name" className="text-red-500 text-[17px]" >Username:</label>
          <input type="name" placeholder=""
          value={userName}
          onChange={(e)=> setUserName(e.target.value)}
           className="w-full h-[7vh] p-[7px] rounded-[5px]  outline-none" />
        </div>



{/* Password */}
<div className="">
          <label type="password" className="text-red-500 text-[17px]" >Password:</label>
          <input type="password" placeholder="" 
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             className="w-full h-[7vh] p-[7px] rounded-[5px]  outline-none"  />
        </div>



        {/* Submit button */}

        <button type="submit" className="w-full h-[3vh] rounded-[10px] text-[#f9f9f9] bg-red-500 flex items-center justify-center  p-[2rem] font-[700]">
          {loading? <ClipLoader color="white" /> : " Login"}
        </button>

{/* Dont Have an account */}
<ul className="flex justify-start pb-[2rem] gap-[5px]">
  <li  className=" text-[#f9f9f9] ">Dont Have an account? </li>
  <li ><Link to="/register" className="text-blue-600">Register</Link> </li>
</ul>






      </form>

    </div>

  </div>
</section>
  )
}

export default Login