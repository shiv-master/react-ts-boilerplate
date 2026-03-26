import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "increase" } | { type: "decrease" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const About = () => {
  const [currentState, dispatch] = useReducer(reducer, { count: 5 });
  return (
    <section>
      This is about section as child
      <div>
        {currentState.count}
        <div>
          <button onClick={() => dispatch({ type: "increase" })}>
            Increase
          </button>
          <button onClick={() => dispatch({ type: "decrease" })}>
            Decrease
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
