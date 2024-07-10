import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constant";

const useMovieTrailer = (movieId) => {
  const [trailerId, setTrailerId] = useState(null);

  // fetch trailer video from TMDB API and update store
  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
    //   console.log(json);

      if (json.results) {
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
        setTrailerId(trailer.key);
      } else {
        console.error("No results found in the response");
      }
    } catch (error) {
      console.error("Failed to fetch movie video:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideo();
    }
  }, [movieId]);

  return trailerId;
};

export default useMovieTrailer;
