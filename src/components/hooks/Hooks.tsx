import { useContext } from "react"
import UsersData from "../context/UserContext"

export const useUserData = () => {
    const userDataCtx = useContext(UsersData)
    if (!userDataCtx) {
        throw new Error('useUserData should be used inside user provider.')
    }
    return userDataCtx
}