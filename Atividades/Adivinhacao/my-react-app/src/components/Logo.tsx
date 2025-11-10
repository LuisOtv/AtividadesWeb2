import React from "react";

const Logo = ({}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <img src={require("../assets/logo.png")} alt="Logo" style={{ maxWidth: "200px" }} />
    </div>
  );
};

export default Logo;
