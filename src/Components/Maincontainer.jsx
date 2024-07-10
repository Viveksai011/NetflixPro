import React from 'react'
import { useSelector } from 'react-redux' 
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;

const mainMovies=movies[0];
// console.log(mainMovies)

const {original_title, overview, id}=mainMovies;
  return (
    <div >
      <Videotitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default Maincontainer