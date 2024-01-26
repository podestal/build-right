import { useMutation } from "@tanstack/react-query"
import { getUser } from "../api/api"

const useUser = (user, setUser) => {
    return useMutation({
        mutationFn: data => getUser(data),
        onSuccess: res => {
            console.log('getting user ...')
            setUser({ 
                ...user, 
                id: res.id, 
                username: res.username, 
                email: res.email, 
                first_name: res.first_name, 
                last_name: res.last_name 
            })
        }
    })
}

export default useUser