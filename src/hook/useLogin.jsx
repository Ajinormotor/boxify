import { useState } from "react"
import { toast } from "react-toastify";
import { useAuthContext } from "../context/useAuthContext";


const  useLogin = () => {
    const [ loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    


        const  login = async({userName, password}) => {


            const success = handleInputs({userName, password});
            if(!success) return;

            setLoading(true)
            try {

                const res = await fetch('/api/auth/login', {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({ userName,password})
                })

                if (!res.ok){ throw Error("Data Not Fetched")}
                
                const result =  await res.json()

  localStorage.setItem('user', JSON.stringify(result))
                  setAuthUser(result);
                  toast.success("Logged in Successfully")
                  console.log("Logged in")
                
            } catch (error) {
             toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

   
return {
    loading, login
    }

}


export default useLogin

const handleInputs = ({userName, password}) => {

    if(!userName || !password){
        toast.error("Please fill in details")
        return false;
    }

    if(password.length < 3){
        toast.error("Password incorrect")
        return false;
    }
    return true
}