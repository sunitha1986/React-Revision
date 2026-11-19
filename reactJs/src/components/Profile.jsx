import React from "react";
import Username from "./Username";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { name } = useContext(UserContext);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
