import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/Hooks";
import { useRef } from "react";

const Login = () => {
  const user = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setUsername } = useAuth();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername(user.current!.value);
    localStorage.setItem("username", user.current!.value);
    navigate("/home");
  };
  return (
    <main>
      <form onSubmit={submitHandler}>
        <label htmlFor="user">UserName</label>
        <input ref={user} type="text" id="user" name="user"></input>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"></input>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
