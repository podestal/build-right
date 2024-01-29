import React, { useState } from 'react'
import { uploadServiceImage } from '../api/api'
import useMutate from '../hooks/useMutate'

const ImageForm = () => {

    const [img, setImg] = useState(null)
    const {mutate: uploadImg} = useMutate(uploadServiceImage, '')

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', img)
        console.log(img)
        uploadImg({ id:2, img:formData })
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