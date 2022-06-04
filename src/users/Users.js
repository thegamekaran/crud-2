import axios from "axios";
import { useState, useEffect } from "react";
import "./users.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [repo, setRepo] = useState(null);

  const config = {
    method: "get",
    url: `https://dummyapi.io/data/v1/user/`,
    headers: {
      "app-id": "628c89f3ebe90a327521eebf",
    },
  };

  const getRepo = () => {
    axios(config)
      .then((response) => {
        console.log(response.data);

        const myRepo = response.data.data;
        setRepo(myRepo);
        console.log(repo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => getRepo(), []);

  return (
    <div>
      <ul>
        {repo &&
          repo.map((obj) => (
            <li>
              <table key={obj.id}>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                  <tr
                    onClick={() => {
                      navigate(`/users/:${obj.id}`);
                    }}
                  >
                    <td>{obj.title}</td>
                    <td>{obj.firstName}</td>
                    <td>{obj.lastName}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
      </ul>

      <button onClick={() => navigate("/newuser")}>Add new user</button>
    </div>
  );
}

export default Users;
