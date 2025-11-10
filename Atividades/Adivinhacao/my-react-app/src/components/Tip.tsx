import React from "react";

interface TipProps {
  label: string;
}

const Tip: React.FC<TipProps> = ({ label }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={require("../assets/lamp.png")} alt="Tip" style={{ maxWidth: "300px" }} />
      <div className="text">
        <h1>Dica</h1>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Tip;
