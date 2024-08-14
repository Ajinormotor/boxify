import ClipLoader from "react-spinners/ClipLoader";
import useLogin from "../../hook/useLogin";

const ReviewInput = () => {


    const { loading} = useLogin()


  return (
<section className="w-[700px]">

    <div  className="flex flex-col w-full">


        <form className="flex flex-col  gap-[20px]  p-[10px]" >


{/* UserName */}
<div className="flex flex-col gap-[5px]">
          <label type="name" className="text-red-500 text-[17px]" >Username:</label>
          <input type="name" placeholder=""
          
      className=" w-full h-[10vh] p-[7px] rounded-[10px] border-[1px] border-red-500  outline-none"  />
        </div>



{/* Password */}
<div className=" flex flex-col gap-[5px]">
          <label type="password" className="text-red-500 text-[17px]" >Drop a Review:</label>
          <input type="password" placeholder="" 
          
             className=" w-full h-[20vh] p-[7px] rounded-[10px] border-[1px] border-red-500  outline-none"  />
        </div>



        {/* Submit button */}

        <button type="submit" className="w-full md:w-[30%] h-[3vh] rounded-[20px] text-[#f9f9f9] bg-red-500 flex items-center justify-center  p-[2rem] font-[700]">
          {loading? <ClipLoader color="white" /> : "Submit"}
        </button>







      </form>

      
    </div>

</section>
  )
}

export default ReviewInput