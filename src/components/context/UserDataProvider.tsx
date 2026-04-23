import axios from "axios"
import { useEffect, useState, type ReactNode } from "react"
import type { User } from "./UserContext"
import UsersData from "./UserContext"

interface Prop {
    children: ReactNode
}

/**
 * Provides user data, loading state, and error state to every consumer.
 */
const UsersProvider = ({ children }: Prop) => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const dataFetching = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
                const structuredData = response.data
                    .map(entity => ({
                        id: String(entity.id),
                        name: entity.name,
                        email: entity.email,
                        address: {
                            city: entity.address.city
                        },
                        company: {
                            name: entity.company.name
                        }
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name))
                setUsers(structuredData)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError('Unable to load users. Please refresh or try again later.')
                }
            } finally {
                setLoading(false)
            }
        }

        void dataFetching()
    }, [])

    return (
        <UsersData.Provider value={{ users, setUsers, loading, error }}>
            {children}
        </UsersData.Provider>
    )
}

export default UsersProvider