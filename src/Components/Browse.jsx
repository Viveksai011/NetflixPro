import Header from "./Header";
import useNowPlayingMovies from "../hooks/useMovies";
import Maincontainer from "./Maincontainer";
import Secondcontainer from "./Secondcontainer";
import usePopularmovies from "../hooks/usePopularmovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularmovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <Secondcontainer />
        </>
      )}
   
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
