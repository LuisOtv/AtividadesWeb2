import React, { useState } from "react";

interface GuessProps {
  onGuess?: (letter: string) => void;
  disabled?: boolean;
}

const Guess: React.FC<GuessProps> = ({ onGuess, disabled = false }) => {
  const [input, setInput] = useState("");

  const handleConfirm = () => {
    if (input.trim().length === 1) {
      onGuess?.(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "left", fontSize: "15px", color: "#000000" }}>Palpite</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          maxLength={1}
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          disabled={disabled}
          style={{
            color: "#000000",
            textAlign: "center",
            fontSize: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#EBEBFC",
            opacity: disabled ? 0.6 : 1,
          }}
          placeholder=""
        />
        <button
          onClick={handleConfirm}
          disabled={disabled}
          style={{
            backgroundColor: "#6363DB",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Guess;
