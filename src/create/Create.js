import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const postData = (e) => {
    e.preventDefault();
    var body = {
      firstName: "",
      lastName: "",
      email: "",
    };
    console.log(this.firstName, this.lastName, this.email);
    var config = {
      method: "post",
      url: "https://dummyapi.io/data/v1/user/create",
      headers: {
        "app-id": "628c89f3ebe90a327521eebf",
        "Content-Type": "application/json",
      },
      data: body,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <label>
          First Name:
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={postData}>Submit</button>
      </form>
    </div>
  );
}

export default Create;
