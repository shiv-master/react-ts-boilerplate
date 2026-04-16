import { createContext } from "react"

export interface User {
    name: string,
    email: string,
    address: {
        city: string
    },
    company: {
        name: string
    }
}

interface Value {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

const UsersData = createContext<Value>({
    users: [],
    setUsers: () => { }
})

export default UsersData