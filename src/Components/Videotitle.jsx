import React from 'react'


const Videotitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-[2%] absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>  {overview}</p>
      <div className=''>
        <button className=' bg-white p-4 px-12 text-xl text-black rounded-lg hover:bg-opacity-75'> ▷ Play</button>
        <button className=' mx-2 bg-gray-800  p-4 px-12  text-xl text-white rounded-lg hover:bg-opacity-35'> More info</button>
      </div>
    </div>
  )
}

export default Videotitle

