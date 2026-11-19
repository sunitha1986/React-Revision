import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setName } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => setName("Kalpana Rao")}>Change Name</button>
    </div>
  );
};

export default Login;
