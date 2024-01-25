import React from 'react'

const Service = ({ service }) => {
  return (
    <div>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
    </div>
  )
}

export default Service