import { useNavigate } from "react-router-dom"
import { useUserData } from "./hooks/Hooks"

const UsersTable = () => {
    const { users } = useUserData()
    const Headers = ['Name', 'Email', 'City', 'Company']
    const navigate = useNavigate()

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/createUser')
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {Headers.map(entity =>
                            <th key={entity}>{entity}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {users.map(entity => <tr key={entity.name}>
                        <td>{entity.name}</td>
                        <td>{entity.email}</td>
                        <td>{entity.address.city}</td>
                        <td>{entity.company.name}</td>
                    </tr>)}
                </tbody>
            </table>
            <button onClick={clickHandler}>Create User</button>
        </div>
    )
}

export default UsersTable