import { memo, useCallback, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useUserData } from "./hooks/Hooks"

interface CreateUserForm {
    name: string
    email: string
    city: string
    company: string
}

const initialFormState: CreateUserForm = {
    name: '',
    email: '',
    city: '',
    company: ''
}

/**
 * CreateUser renders a controlled form and enforces required fields.
 */
const CreateUser = () => {
    const { setUsers } = useUserData()
    const [formData, setFormData] = useState<CreateUserForm>(initialFormState)
    const [formError, setFormError] = useState<string | null>(null)
    const navigate = useNavigate()

    const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setFormError(null)
    }, [])

    const formHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!formData.name.trim() || !formData.email.trim() || !formData.city.trim() || !formData.company.trim()) {
            setFormError('Please complete all fields before submitting.')
            return
        }

        const newUserId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

        setUsers(prevUsers => [
            ...prevUsers,
            {
                id: newUserId,
                name: formData.name,
                email: formData.email,
                address: {
                    city: formData.city
                },
                company: {
                    name: formData.company
                }
            }
        ])

        setFormData(initialFormState)
        navigate('/usersTable')
    }, [formData, navigate, setUsers])

    return (
        <form onSubmit={formHandler}>
            <h2>Create User</h2>
            {formError && <p role="alert" style={{ color: 'red' }}>{formError}</p>}
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input id="city" name="city" type="text" required value={formData.city} onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" required value={formData.company} onChange={changeHandler} />
            </div>
            <button type="submit">Create</button>
        </form>
    )
}

export default memo(CreateUser)