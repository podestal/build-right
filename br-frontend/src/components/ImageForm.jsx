import React, { useState } from 'react'
import { uploadServiceImage, uploadReviewImage } from '../api/api'
import useMutate from '../hooks/useMutate'

const ImageForm = ({ serviceId, reviewId, state }) => {

    const [img, setImg] = useState(null)
    const {mutate: createServiceImg} = useMutate(uploadServiceImage, '')
    const {mutate: createReviewImg} = useMutate(uploadReviewImage, '')

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', img)
        console.log('img', img)
        if (serviceId) {
            createServiceImg({ serviceId, img:formData })
        }
        else if (reviewId) {
            console.log('review id', reviewId);
            createReviewImg({ reviewId, img:{image:img, state} })
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='file'
            onChange={e => setImg(e.target.files[0])}
        />
        <button>Submit</button>
    </form>
  )
}

export default ImageForm