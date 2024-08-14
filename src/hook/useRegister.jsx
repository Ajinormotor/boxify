import { useState } from "react";
import { useAuthContext } from "../context/useAuthContext";
import { toast } from 'react-toastify';


const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();


  const register =  async({fullName, userName,password, confirmPassword, gender}) => {
const success = handleInputs({fullName,userName,password,confirmPassword, gender}) ;
if(!success) return;

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({fullName,userName,password,confirmPassword, gender})
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Data Not Fetched");

      localStorage.setItem("user", JSON.stringify(result));
      setAuthUser(result);


    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register };
};

export default useRegister;





const handleInputs = ({fullName,userName,password,confirmPassword, gender}) => {


    if(!fullName || !userName || !password || !confirmPassword || !gender){
      toast.error('Please enter all details')
    }

    if(password < 0){
      toast.error('Please enter all details')
    }
    

    return true

  }






