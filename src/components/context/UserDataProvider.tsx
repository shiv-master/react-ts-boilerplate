import axios from "axios"
import { useEffect, useState, type ReactNode } from "react"
import type { User } from "./UserContext"
import UsersData from "./UserContext"

interface Prop {
    children: ReactNode
}

const UsersProvider = ({ children }: Prop) => {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        const dataFetching = async () => {
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            const structuredData = response.data.map(entity => ({
                name: entity.name,
                email: entity.email,
                address: {
                    city: entity.address.city
                },
                company: {
                    name: entity.company.name
                }
            })).sort((a, b) => a.name.localeCompare(b.name))
            setUsers(structuredData)
        }
        dataFetching()
    }, [])
    return (
        <UsersData.Provider value={
            { users, setUsers }
        }>{children}</UsersData.Provider>
    )
}

export default UsersProvider