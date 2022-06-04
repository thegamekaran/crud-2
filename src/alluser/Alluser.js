import React from "react";
import { useNavigate } from "react-router";

function Alluser() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`/users`)}> Get all users</button>
    </div>
  );
}

export default Alluser;
