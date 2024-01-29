import React from 'react'
import useMutate from '../hooks/useMutate';
import { deleteReview, deleteService, deleteRequest, deleteServiceImage } from '../api/api';

const Delete = ({ review, service, access, request, serviceImage }) => {

    const { mutate: reviewDelete } = useMutate(deleteReview, 'reviews')
    const { mutate: serviceDelete} = useMutate(deleteService, 'services')
    const { mutate: requestDelete} = useMutate(deleteRequest, 'requests')
    const { mutate: serviceImageDelete} = useMutate(deleteServiceImage, 'services')

    const handleDelete = () => {

        if (serviceImage) {
          const {serviceId, imageId} = serviceImage
          serviceImageDelete({ serviceId, imageId })
        }
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