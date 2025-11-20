import React from "react";

interface BtnProps {
  label: string;
  color: string;
  textcolor: string;
  onClick?: () => void;
}

const Btn: React.FC<BtnProps> = ({ color, label, textcolor, onClick }) => {
  return (
    <button onClick={onClick} className={color + " " + textcolor + " w-full p-3 cursor-pointer rounded-md"}>
      <strong>{label}</strong>
    </button>
  );
};

export default Btn;
