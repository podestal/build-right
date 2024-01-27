import React, { useState } from 'react'

const ServiceForm = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

  return (
    <form>
        <input 
            type='text'
            placeholder='Service Title'

        />
    </form>
  )
}

export default ServiceForm