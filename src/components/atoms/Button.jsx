import React from "react";

const Button = ({ label, type, onClick = () => {} }) => {
  return (
    <button
      type={type}
      className="font-bold px-4 mt-4 py-2 rounded-md bg-black text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
