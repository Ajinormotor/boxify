
import { useEffect } from 'react'
import './App.css'
import Routs from './routs/routs'

import Aos from "aos";
import Nav from './ui/nav';
import MobileNav from './ui/mobileNav';
import Footer from './ui/footer';


function App() {


  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[]);
  
  


  return (
    <>



<div className="w-full">
<Nav /> 
   
<MobileNav />
</div>

<Routs/>
<Footer />
    </>
  )
}

export default App
