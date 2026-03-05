import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const Users = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const Headers = ["Name", "Email", "City", "Company"];
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUserData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    };
    // const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
    getData();
  }, []);
  return (
    <main>
      <table>
        <thead>
          <tr>
            {Headers.map((entity) => (
              <th>{entity}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((entity) => (
              <tr>
                <td>{entity.name}</td>
                <td>{entity.email}</td>
                <td>{entity.address.city}</td>
                <td>{entity.company.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <footer>
        <button onClick={() => navigate("/createUser")}>Create User</button>
      </footer>
    </main>
  );
};

export default Users;
