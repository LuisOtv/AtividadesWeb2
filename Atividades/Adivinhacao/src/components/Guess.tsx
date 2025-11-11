import React from "react";

interface GuessProps {
  onClick?: () => void;
}

const Guess: React.FC<GuessProps> = ({ onClick }) => {
  return (
    <div>
      <h1 style={{ textAlign: "left", fontSize: "15px", color: "#000000" }}>Palpite</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{
            color: "#00000",
            textAlign: "center",
            fontSize: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#EBEBFC",
          }}
        ></input>
        <button style={{ backgroundColor: "#6363DB" }}>Confirmar</button>
      </div>
    </div>
  );
};

export default Guess;
