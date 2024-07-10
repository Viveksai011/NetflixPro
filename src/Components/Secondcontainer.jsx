import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useMovies'; // Import the hook
import usePopularMovies from '../hooks/usePopularmovies'; // Import the hook

const Secondcontainer = () => {
  useNowPlayingMovies(); // Use the hook
  usePopularMovies(); // Use the hook

  const { nowPlayingMovies, popularMovies } = useSelector(store => store.movies);

  return (
    (nowPlayingMovies && popularMovies) && (
      <div className='bg-black'>
        <div className='-mt-52 relative z-20'>
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Horror"} movies={nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={nowPlayingMovies} />
          {/* Movielist - popluar
              Movielist - nowplaying
              Movielist - Trending
              Movielist - Horror */}
        </div>
      </div>
    )
  )
}

export default Secondcontainer;
