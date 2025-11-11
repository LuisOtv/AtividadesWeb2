import React from "react";
import image from "../assets/lamp.svg";

interface TipProps {
  label: string;
}

const Tip: React.FC<TipProps> = ({ label }) => {
  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        color: "#000000",
        backgroundColor: "#EBEBFC",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "8px",
        gap: "8px",
        borderRadius: "5px",
      }}
    >
      <img style={{ width: "20px", height: "20px" }} src={image} alt="" />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <h1 style={{ color: "#4F4FB9", fontSize: "20px", margin: 0, textAlign: "left" }}>Dica</h1>
        <p style={{ color: "#4F4FB9", fontSize: "12px", margin: 0, textAlign: "left" }}>{label}</p>
      </div>
    </div>
  );
};

export default Tip;
