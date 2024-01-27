import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

const useMutate = (apiFunction, queryKey) => {

    const queryClient = useQueryClient()

  return useMutation({
    mutationFn: data => apiFunction(data),
    onSuccess: res => {
        queryClient.invalidateQueries([queryKey])
        console.log(res)
    }
  })
}

export default useMutate