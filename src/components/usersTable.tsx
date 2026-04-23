import { memo, type MouseEvent, useCallback } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector, useUserData } from "./hooks/Hooks"
import { counterActions } from "./store/store"

const headers = ['Name', 'Email', 'City', 'Company'] as const

/**
 * UsersTable renders a list of users and a small counter with redux-managed state.
 */
const UsersTable = () => {
    const { users, loading, error } = useUserData()
    const navigate = useNavigate()
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    const clickHandler = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/createUser')
    }, [navigate])

    if (loading) {
        return <div>Loading users...</div>
    }

    if (error) {
        return <div role="alert" style={{ color: 'red' }}>{error}</div>
    }

    return (
        <div>
            <div>
                {users.length === 0 ? (
                    <p>No users available. Create a new user to get started.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                {headers.map(entity =>
                                    <th key={entity}>{entity}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <button onClick={clickHandler}>Create User</button>
            </div>
            <div>
                <span>{count}</span>
                <button onClick={() => dispatch(counterActions.increase(5))}>+</button>
                <button onClick={() => dispatch(counterActions.decrease(2))}>-</button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default memo(UsersTable)