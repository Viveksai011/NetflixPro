import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-5'>
      <img src={IMG_CDN_URL+ posterPath} alt=" Movie Card" />
    </div>
  )
}

export default MovieCard
