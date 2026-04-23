import { memo, useCallback, useReducer, useState, type ChangeEvent } from "react"

interface State {
    count: number
}

type Action =
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'MODIFY'; payload: number }

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

/**
 * Counter demonstrates a memoized reducer-driven counter component.
 */
const Counter = () => {
    const [currentVal, dispatch] = useReducer(reducer, initialState)
    const [value, setValue] = useState(0)

    const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
    }, [])

    const increase = useCallback(() => dispatch({ type: 'INCREMENT' }), [])
    const decrease = useCallback(() => dispatch({ type: 'DECREMENT' }), [])
    const modify = useCallback(() => dispatch({ type: 'MODIFY', payload: value }), [value])

    return (
        <div>
            <p>{currentVal.count}</p>
            <div>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
                <div>
                    <input type="number" value={value} onChange={inputChangeHandler} />
                    <button onClick={modify}>Modify</button>
                </div>
            </div>
        </div>
    )
}

export default memo(Counter)