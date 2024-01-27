import React from 'react'
import useMutate from '../hooks/useMutate';
import { deleteReview, deleteService } from '../api/api';

const Delete = ({ review, service, access }) => {

    const { mutate: reviewDelete } = useMutate(deleteReview, 'reviews')
    const { mutate: serviceDelete} = useMutate(deleteService, 'services')

    const handleDelete = () => {
        if (service) {
            serviceDelete({ id: service.id, access: access })
        } else {
            reviewDelete({ id: review.id, access: access })
        }
    }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

export default Delete