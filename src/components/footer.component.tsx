import React from "react";
import { WINDOW_WIDTH } from "../constants";

const Footer = () => {
  return (
    <div style={{ marginTop: "25px" }}>
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "#E6E6E6" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <p
          style={{ fontSize: "12px", color: "#999999", textOverflow: "hidden" }}
        >
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default Footer;
