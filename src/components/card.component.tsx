import React from "react";
import { CardStyle } from "../styles";
import Footer from "./footer.component";
import Form from "./form.component";
import Profile from "./profile.component";

const Card = () => {
  return (
    <div style={CardStyle}>
   
      <Profile />
      <Form />
      <Footer />
    </div>
  );
};

export default Card;
