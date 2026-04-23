import { createContext, type Dispatch, type SetStateAction } from "react"

/**
 * User profile shape used by the user list and form.
 */
export interface User {
    id: string
    name: string
    email: string
    address: {
        city: string
    }
    company: {
        name: string
    }
}

interface UserContextValue {
    users: User[]
    setUsers: Dispatch<SetStateAction<User[]>>
    loading: boolean
    error: string | null
}

const UsersData = createContext<UserContextValue>({
    users: [],
    setUsers: () => { },
    loading: false,
    error: null
})

export default UsersData