import React from 'react'

const Image = ({ image, title }) => {
  return (
    <img src={image.image} alt={`${title}-${image.id}`} />
  )
}

export default Image