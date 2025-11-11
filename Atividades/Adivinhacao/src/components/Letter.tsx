import React from "react";

interface LetterProps {
  label: string;
}

const Letter: React.FC<LetterProps> = ({ label }) => {
  return (
    <div
      style={{
        backgroundColor: "#EBEBFC",
        width: "60px",
        height: "60px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "black",
          margin: 0,
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        {label}
      </h1>
    </div>
  );
};

export default Letter;
