import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { username } = useContext(UserContext);

  return <h2>Welcome, {username}!</h2>;
};

export default Navbar;
