import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice.jsx";
import { useEffect } from "react";

//  Custom Hooks Created and impoorted to browese component
const useNowPlayingMovies = () => {
      // fetch data from TMDB API and update store

      useEffect(() => {
        getNowPlayingMovies();
      }, []);

  const dispatch = useDispatch();
  
  
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

 }

export default useNowPlayingMovies;