import React from "react";
import { ButtonStyle } from "../styles";

interface ButtonProps {
  title?: string;
  onBtnClick?: () => void;
}
const Button = (props: ButtonProps) => {
  const { title, onBtnClick } = props;
  return (
    <button className="Sign-in" style={ButtonStyle} onClick={onBtnClick}>
      {title}
    </button>
  );
};

export default Button;
