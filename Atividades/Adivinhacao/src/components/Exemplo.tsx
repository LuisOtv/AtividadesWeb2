import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "8px 16px", borderRadius: "4px", border: "none", background: "#007bff", color: "#fff", cursor: "pointer" }}>
      {label}
    </button>
  );
};

export default Button;
