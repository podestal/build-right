import React from 'react'

const Service = ({ service }) => {
  return (
    <div>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default Service