import React from 'react'
import Image from './image'

const Images = ({ images, service, review }) => {
  return (
    <div>
        {images.map(img => (
            <Image 
                key={img.id} 
                image={img}
                service={service}
                review={review}
            />
        ))}
    </div>
  )
}

export default Images