import { useEffect, useState } from "react";
import { useAppDispatch, useAuth, useSelectorHook } from "./hooks/Hooks";
import { CounterAction } from "./store/store";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";

interface User {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Home = () => {
  const [data, setData] = useState<User[]>([]);
  const { username } = useAuth();
  const counter = useSelectorHook((state) => state.count.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/posts",
        );
        console.log("data", response.data);
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error))
          console.log("error", error.response?.data);
      }
    };
    getData();
  }, []);
  return (
    <section>
      Welcome {username}!
      <nav>
        <NavLink
          to={"/product/clothes?category=fabric"}
          state={{ username: "welcome shivam" }}
          className={({ isActive }) => (isActive ? "active" : "normal")}
        >
          Products
        </NavLink>
      </nav>
      <Outlet />
      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>UserID</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((entity) => (
              <tr>
                <td>{entity.id}</td>
                <td>{entity.title}</td>
                <td>{entity.body}</td>
                <td>{entity.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div>{counter}</div>
      <footer>
        <button onClick={() => dispatch(CounterAction.increase(5))}>
          Increase by 5
        </button>
        <button onClick={() => dispatch(CounterAction.decrease(2))}>
          Decrease by 2
        </button>
      </footer>
    </section>
  );
};

export default Home;
