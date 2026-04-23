import { Outlet, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector, useUserData } from "./hooks/Hooks"
import { counterActions } from "./store/store"

const UsersTable = () => {
    const { users } = useUserData()
    const Headers = ['Name', 'Email', 'City', 'Company']
    const navigate = useNavigate()
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/createUser')
    }
    return (
        <div>
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
            <div>
                {count}
                <button onClick={() => dispatch(counterActions.increase(5))}>+</button>
                <button onClick={() => dispatch(counterActions.decrease(2))}>-</button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default UsersTable