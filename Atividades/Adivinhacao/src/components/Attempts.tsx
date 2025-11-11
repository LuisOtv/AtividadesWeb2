import React from "react";
import image from "../assets/Refresh.svg";

interface AttemptsProps {
  label: string;
}

const Attempts: React.FC<AttemptsProps> = ({ label }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <p style={{ color: "#E8891C" }}>{label} </p>
        <p style={{ color: "#000000", paddingLeft: "5px" }}> de 10 tentativas</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Attempts;
