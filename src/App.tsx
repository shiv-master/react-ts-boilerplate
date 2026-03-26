// import { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";

function App() {
  // const [count, setCount] = useState<number>(0)

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} replace />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="home" element={<Home />}>
            <Route path="about/:name?" element={<About />}></Route>
          </Route>
          <Route path="product/:item" element={<Product />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
