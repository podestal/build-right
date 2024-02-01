import React from 'react'
import useMutate from '../hooks/useMutate';
import { deleteReview, deleteService, deleteRequest, deleteServiceImage, deleteReviewImage } from '../api/api';

const Delete = ({ review, service, access, request, serviceId, reviewId, imageId }) => {

    const { mutate: reviewDelete } = useMutate(deleteReview, 'reviews')
    const { mutate: serviceDelete} = useMutate(deleteService, 'services')
    const { mutate: requestDelete} = useMutate(deleteRequest, 'requests')
    const { mutate: serviceImageDelete} = useMutate(deleteServiceImage, 'services')
    const { mutate: reviewImageDelete} = useMutate(deleteReviewImage, 'reviews')

    const handleDelete = () => {

        if (serviceId) {
          return serviceImageDelete({ serviceId, imageId })
        }
        if (reviewId) {
          return reviewImageDelete({ reviewId, imageId })
        }
        if (request) {
          return requestDelete({ id: request.id })
        }
        if (service) {
          return serviceDelete({ id: service.id, access: access })
        } 
        if (review) {
          return reviewDelete({ id: review.id, access: access })
        }
    }

  return (
    <button className='delete-btn' onClick={handleDelete}>Delete</button>
  )
}

export default Delete