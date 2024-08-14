/* eslint-disable react/prop-types */
import { createContext,  useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUer] =  useState(JSON.parse(localStorage.getItem("user" || null)));


    return(
     
    <AuthContext.Provider value={{authUser,setAuthUer}}>
        {children}
    </AuthContext.Provider>

)
}