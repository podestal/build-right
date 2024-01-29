import React, { useState } from 'react'
import { uploadServiceImage } from '../api/api'
import useMutate from '../hooks/useMutate'

const ImageForm = ({ id }) => {

    const [img, setImg] = useState(null)
    const {mutate: uploadImg} = useMutate(uploadServiceImage, '')

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', img)
        console.log(img)
        uploadImg({ id, img:formData })
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