import React from 'react'
import Image from './image'

const Images = ({ images, title }) => {
  return (
    <div>
        {images.map(img => (
            <Image 
                key={img.id} 
                image={img}
                title={title}
            />
        ))}
    </div>
  )
}

export default Images