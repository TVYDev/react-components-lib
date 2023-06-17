import React from "react";

interface IButtonProps {
  label: string;
}

const Button = ({ label }: IButtonProps) => {
  return <button>{label}</button>;
};

export default Button;
