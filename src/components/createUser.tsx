import { useRef } from "react";
import { useUserData } from "./hooks/Hooks";

const CreateUser = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);

  const { setUserData } = useUserData();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      city: cityRef.current?.value,
      company: companyRef.current?.value,
    };
    setUserData(newUser);
  };

  return (
    <main>
      <h1>Create User</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Name</label>
        <input ref={nameRef} type="text" id="username" name="username"></input>
        <br></br>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" name="email"></input>
        <br></br>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" name="city"></input>
        <br></br>
        <label htmlFor="company">Company</label>
        <input ref={companyRef} type="text" id="company" name="company"></input>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </main>
  );
};

export default CreateUser;
