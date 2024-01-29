import React from 'react'
import useMutate from '../hooks/useMutate';
import { deleteReview, deleteService, deleteRequest } from '../api/api';

const Delete = ({ review, service, access, request }) => {

    const { mutate: reviewDelete } = useMutate(deleteReview, 'reviews')
    const { mutate: serviceDelete} = useMutate(deleteService, 'services')
    const { mutate: requestDelete} = useMutate(deleteRequest, 'requests')

    const handleDelete = () => {

        if (request) {
          requestDelete({ id: request.id })
        }
        if (service) {
          serviceDelete({ id: service.id, access: access })
        } 
        if (review) {
          reviewDelete({ id: review.id, access: access })
        }
    }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

export default Delete