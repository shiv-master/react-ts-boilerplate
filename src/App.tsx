import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import CreateUser from "./components/createUser";

function App() {
  return (
    <>
      <div className="card">
        <Routes>
          <Route path="/" element={<Navigate to={"/users"} replace />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="createUser" element={<CreateUser />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
