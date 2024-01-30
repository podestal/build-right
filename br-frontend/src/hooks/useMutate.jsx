import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

const useMutate = (apiFunction, queryKey, setSuccess, setError, setDisplayMsg) => {

    const queryClient = useQueryClient()

  return useMutation({
    mutationFn: data => apiFunction(data),
    onSuccess: res => {
        queryClient.invalidateQueries([queryKey])
        if (res.message) {
          setError(true)
          setDisplayMsg(res.message)
        } else {
          setSuccess(true)
        }
    },
  })
}

export default useMutate