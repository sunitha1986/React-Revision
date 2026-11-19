import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Username = () => {
  const name = useContext(UserContext);
  console.log("name:", name);
  return <div>Name: {name}</div>;
};

export default Username;
