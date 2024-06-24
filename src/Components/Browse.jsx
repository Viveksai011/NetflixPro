import Header from "./Header";
import useNowPlayingMovies from "../hooks/useMovies";
import Maincontainer from "./Maincontainer";
import Secondcontainer from "./Secondcontainer";

const Browse = () => {
 
useNowPlayingMovies()

  return (
    <div>
      <Header />
      <Maincontainer/>
      <Secondcontainer/>
      {/* main container
        -video title
        - video background 
        Secoundary container
        -movie list * n
         -cards*n
        */}
    </div>
  );
};

export default Browse;
