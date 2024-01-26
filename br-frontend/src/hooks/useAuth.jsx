import UserContext from "../context/UserProvider"
import { useContext } from "react"

const useAuth = () => {
    return useContext(UserContext)
}

export default useAuth