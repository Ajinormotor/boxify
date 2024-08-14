import Hero from "../components/hero"
import {Helmet} from "react-helmet";
import Movie from "../components/movie";

import MobileMovie from "../components/mobileMovie";
import Tv from "../components/tv";
import MobileTv from "../components/mobileTv";


const Home = () => {
  return (
  < section className="overflow-x-hidden">

<Helmet>
                <meta charSet="utf-8" />
                <title>Boxify | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>



<Hero />

<div className="lg:block hidden">
<Movie />
</div>


<div className="lg:block hidden">
<Tv />
</div>

<div className="block lg:hidden">
<MobileMovie />
</div>

<div className="block lg:hidden">
<MobileTv />
</div>



  </section>
  )
}

export default Home