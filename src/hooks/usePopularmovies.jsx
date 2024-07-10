import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

// Custom Hook to fetch popular movies
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return popularMovies;
};

export default usePopularMovies;
