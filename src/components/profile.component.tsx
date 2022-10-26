import React from "react";
import avatar from "../../src/assets/avatar.svg";
import { ProfileStyle } from "../styles";

const Profile = () => {
  return (
    <>
    
      <div style={ProfileStyle}>
        <img src={avatar} height="150" width="150" alt="Avatar" />
        <span style={{ fontSize: "12px" }}>Personal Account</span>
        <span style={{ fontSize: "24px" }}>Andrew@polka.io</span>
      </div>
    </>
  );
};

export default Profile;
