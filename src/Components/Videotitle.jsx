import React from 'react'

const Videotitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <button>Play</button>
        <button>More info</button>
      </div>
    </div>
  )
}

export default Videotitle
