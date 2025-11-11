import React from "react";

interface UsedProps {
  guessedLetters?: string[];
  wrongLetters?: string[];
}

const Used: React.FC<UsedProps> = ({ guessedLetters = [], wrongLetters = [] }) => {
  const allLetters = [...guessedLetters, ...wrongLetters].sort();

  return (
    <div>
      <h1 style={{ display: "flex", textAlign: "left", fontSize: "15px", color: "#000000" }}>Letras Utilizadas</h1>
      {allLetters.length > 0 && (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {allLetters.map((letter) => {
            const isCorrect = guessedLetters.includes(letter);
            return (
              <div
                key={letter}
                style={{
                  backgroundColor: isCorrect ? "#90EE90" : "#ffcccb",
                  color: "#000000",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {letter}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Used;
