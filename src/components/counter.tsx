import { useReducer, useState } from "react"

interface State {
    count: number
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'MODIFY', payload: number }

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'MODIFY':
            return { count: state.count + action.payload }
        default:
            return state
    }
}

const initialState: State = {
    count: 0
}

const Counter = () => {
    const [currentVal, dispatch] = useReducer(reducer, initialState)
    const [value, setValue] = useState(0)
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+(e.target.value))
    }
    return (
        <div>
            {currentVal.count}
            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
                <div>
                    <input type="number" value={value} onChange={inputChangeHandler}></input>
                    <button onClick={() => dispatch({ type: 'MODIFY', payload: value })}>Modify</button>
                </div>
            </div>
        </div>
    )
}

export default Counter