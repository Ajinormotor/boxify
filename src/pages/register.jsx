import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import useRegister from "../hook/useRegister";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import GenderCheck from "../components/genderCheck";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { loading, register } = useRegister();
    const navigate = useNavigate()


  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleGenderCheck = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(inputs);
    
    navigate("/")

  };

  return (
    <section className="bg-black w-full h-full items-center justify-center flex relative overflow-x-hidden">
      <div className="flex flex-col items-center justify-center w-[90%] lg:w-[50%] h-[20%] border-[1px] border-red-500 mt-[7rem] mb-[5rem] md:pt-[5rem] overflow-x-hidden">
        {/* Heading */}
        <div className="flex gap-[10px] items-center">
          <BiCameraMovie className="text-[45px] text-red-700" />
          <h1 className="text-red-700 font-[800] text-[28px] pt-[0.7rem]">Register</h1>
        </div>

        {/* Form and input */}
        <div>
          <form className="flex flex-col gap-[20px] p-[10px]" onSubmit={handleRegister}>
            {/* FullName */}
            <div className="">
              <label className="text-red-500 text-[17px]">Fullname:</label>
              <input
                type="text"
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                className="w-full h-[7vh] p-[10px] rounded-[5px] outline-none"
              />
            </div>

            {/* UserName */}
            <div className="">
              <label className="text-red-500 text-[17px]">Username:</label>
              <input
                type="text"
                value={inputs.userName}
                onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                className="w-full h-[7vh] p-[7px] rounded-[5px] outline-none"
              />
            </div>

            {/* Password */}
            <div className="">
              <label className="text-red-500 text-[17px]">Password:</label>
              <input
                type="password"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                className="w-full h-[7vh] p-[7px] rounded-[5px] outline-none"
              />
            </div>

            {/* Confirm password */}
            <div className="">
              <label className="text-red-500 text-[17px]">Confirm Password:</label>
              <input
                type="password"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                className="w-full h-[7vh] p-[10px] rounded-[5px] outline-none"
              />
            </div>

            {/* Gender Check */}
            <GenderCheck onCheckboxChange={handleGenderCheck} selectedGender={inputs.gender} className="my-[10rem]" />

            {/* Submit button */}
            <button
              type="submit"
              className="w-full h-[3vh] rounded-[10px] text-[#f9f9f9] bg-red-500 flex items-center justify-center p-[2rem] font-[700]"
            >
              {loading ? <ClipLoader color="white" /> : "Register"}
            </button>

            {/* Don't Have an Account */}
            <ul className="flex justify-start pb-[2rem] gap-[5px]">
              <li className="text-[#f9f9f9]">Have an account already?</li>
              <li>
                <Link to="/login" className="text-blue-600">Login</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};



export default Register;