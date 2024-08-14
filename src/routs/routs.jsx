import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Register from "../pages/register"
import Login from "../pages/login"
import MovieDetails from "../pages/movieDetails"
import { useAuthContext } from "../context/useAuthContext"
import TvDetails from "../pages/tvDetails"


const Routs = () => {

const {authUser} = useAuthContext();


  return (
  
  <>
<Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/register" element= { authUser? <Navigate to="/"  /> : <Register />} />
    <Route path="/login" element={authUser? <Navigate to="/"  /> : <Login  />} />
    <Route path="/moviedetails/:id" element={<MovieDetails  />} />
    <Route path="/tvdetails/:id" element={<TvDetails  />} />
</Routes>

  </>
  )
}

export default Routs