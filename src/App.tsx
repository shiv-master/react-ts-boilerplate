import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import UsersTable from "./components/UsersTable";
import CreateUser from "./components/createUser";

function App() {
  return (
    <>
      <div className="card">
        <Routes>
          <Route path="/" element={<Navigate to={'/usersTable'} replace />}></Route>
          <Route path="usersTable" element={<UsersTable />}></Route>
          <Route path="createUser" element={<CreateUser />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
