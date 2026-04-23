import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import UsersTable from "./components/usersTable";
import CreateUser from "./components/createUser";
import Counter from "./components/counter";

function App() {
  return (
    <>
      <div className="card">
        <Routes>
          <Route path="/" element={<Navigate to={'/usersTable'} replace />}></Route>
          <Route path="usersTable" element={<UsersTable />}>
            <Route path="counter" element={<Counter />}></Route>
          </Route>
          <Route path="createUser" element={<CreateUser />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
