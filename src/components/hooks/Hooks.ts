import { useContext } from "react"
import UsersData from "../context/UserContext"
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { AppDispatch, AppState } from "../store/store"

export const useUserData = () => {
    const userDataCtx = useContext(UsersData)
    if (!userDataCtx) {
        throw new Error('useUserData should be used inside user provider.')
    }
    return userDataCtx
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector