import React from 'react'
import Image from './image'

const Images = ({ images, service }) => {
  return (
    <div>
        {images.map(img => (
            <Image 
                key={img.id} 
                image={img}
                service={service}
            />
        ))}
    </div>
  )
}

export default Images