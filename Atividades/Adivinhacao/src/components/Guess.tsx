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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleConfirm();
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
          onKeyPress={handleKeyPress}
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
          placeholder="A"
        />
        <button
          onClick={handleConfirm}
          disabled={disabled}
          style={{
            backgroundColor: disabled ? "#aaa" : "#6363DB",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Guess;
