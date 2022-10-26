import React from "react";
import { WINDOW_WIDTH } from "../constants";
import Button from "./button.component";

const Form = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{ fontSize: "14px", marginBottom: "10px", marginLeft: "25px" }}
      >
        Password
      </span>
      <input
        type="email"
        style={{
          width: WINDOW_WIDTH > 720 ? "300px" : "90%",
          height: "30px",
          borderWidth: "1px",
          borderRadius: "30px",
          borderColor: "#6877CA",
          padding: "10px",
          fontSize: "20px",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "14px", marginBottom: "10px" }}>
          Forgot Password
        </span>
        <span
          style={{
            fontSize: "14px",
            marginBottom: "10px",
            marginLeft: "5px",
            color: "#6877CA",
            fontWeight: "bold",
          }}
        >
          Reset
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="checkbox" />
          <span style={{ fontSize: "14px", color: "#333333" }}>
            Stay signed in
          </span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Form;
