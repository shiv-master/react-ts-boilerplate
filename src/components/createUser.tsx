import { useState } from "react"
import { useUserData } from "./hooks/Hooks"
import { useNavigate } from "react-router-dom"

const CreateUser = () => {
    const { setUsers } = useUserData()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        company: ''
    })
    const navigate = useNavigate()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }))
    }

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUsers(prevUsers => ([...prevUsers, {
            name: formData.name,
            email: formData.email,
            address: {
                city: formData.city
            },
            company: {
                name: formData.company
            }
        }]))
        setFormData({
            name: '',
            email: '',
            city: '',
            company: ''
        })
        navigate('/usersTable')
    }

    return (
        <form onSubmit={formHandler}>
            <h2>Create User</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name='name' value={formData.name} onChange={changeHandler}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={formData.email} onChange={changeHandler}></input>
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input id="city" name="city" value={formData.city} onChange={changeHandler}></input>
            </div>
            <div>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" value={formData.company} onChange={changeHandler}></input>
            </div>
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateUser