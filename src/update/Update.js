import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router";

function Update() {
  //   const navigate = useNavigate();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setEmail(localStorage.getItem("Email"));
  }, []);

  const updateAPIData = () => {
    var data = JSON.stringify({
      lastName: "temp new",
    });

    var config = {
      method: "put",
      url: "https://dummyapi.io/data/v1/user/",
      headers: {
        "app-id": "628c89f3ebe90a327521eebf",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form>
        <label>
          First Name
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={updateAPIData}>Update </button>
      </form>
    </div>
  );
}

export default Update;
