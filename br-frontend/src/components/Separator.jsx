import React from 'react'

const Separator = ({ title }) => {
  return (
    <div className='separator-container'>
        <h2>{title}</h2>
        <div className='separator-line'></div>
    </div>
  )
}

export default Separator