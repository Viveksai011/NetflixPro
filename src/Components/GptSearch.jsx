import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Background_Img } from '../Utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div className="absolute inset-0 -z-10">
        <img
          src={Background_Img}
          alt="background"
          className='w-full h-full'
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
