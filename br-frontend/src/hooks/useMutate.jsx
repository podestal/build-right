import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

const useMutate = (apiFunction, queryKey) => {

    const queryClient = useQueryClient()

  return useMutation({
    mutationFn: data => apiFunction(data),
    onSuccess: queryClient.invalidateQueries([queryKey])
  })
}

export default useMutate