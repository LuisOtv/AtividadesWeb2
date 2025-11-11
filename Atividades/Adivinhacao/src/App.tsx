import "./App.css";
import { useState, useEffect } from "react";
import { Logo, Tip, Attempts, Letter, Guess, Used } from "./components";
import words from "./lib/words.json";

interface WordData {
  id: number;
  word: string;
  tip: string;
}

function App() {
  const [currentWord, setCurrentWord] = useState<WordData | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongLetters, setWrongLetters] = useState<Set<string>>(new Set());
  const [attempts, setAttempts] = useState(10);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setGuessedLetters(new Set());
    setWrongLetters(new Set());
    setAttempts(10);
    setGameStatus("playing");
  }, []);

  useEffect(() => {
    if (!currentWord) return;

    const wordLetters = new Set(currentWord.word.toUpperCase());
    const allGuessed = Array.from(wordLetters).every((letter) => guessedLetters.has(letter));

    if (allGuessed) {
      setGameStatus("won");
    } else if (attempts <= 0) {
      setGameStatus("lost");
    }
  }, [guessedLetters, wrongLetters, attempts, currentWord]);

  const handleGuess = (letter: string) => {
    const upperLetter = letter.toUpperCase();

    if (guessedLetters.has(upperLetter) || wrongLetters.has(upperLetter)) {
      return;
    }

    if (!currentWord) return;

    const wordLetters = currentWord.word.toUpperCase();

    if (wordLetters.includes(upperLetter)) {
      setGuessedLetters((prev) => new Set([...prev, upperLetter]));
    } else {
      setWrongLetters((prev) => new Set([...prev, upperLetter]));
      setAttempts((prev) => prev - 1);
    }
  };

  if (!currentWord) {
    return <div>Carregando...</div>;
  }

  const wordLetters = currentWord.word.toUpperCase().split("");
  const displayWord = wordLetters.map((letter) => (guessedLetters.has(letter) ? letter : ""));

  return (
    <>
      <div
        style={{ minWidth: "600px", display: "flex", flexDirection: "column", gap: "30px", backgroundColor: "#f5f5fa", padding: "50px", borderRadius: "15px" }}
      >
        <Logo />
        <Attempts label={String(attempts)} />
        <Tip label={currentWord.tip} />
        <div style={{ gap: "10px", display: "flex", alignContent: "center", alignItems: "center", justifyItems: "center" }}>
          {displayWord.map((letter, index) => (
            <Letter key={index} label={letter} />
          ))}
        </div>
        <div style={{ alignItems: "start", justifyItems: "start" }}>
          <Guess onGuess={handleGuess} disabled={gameStatus !== "playing"} />
          <Used guessedLetters={Array.from(guessedLetters).sort()} wrongLetters={Array.from(wrongLetters).sort()} />
        </div>
      </div>
    </>
  );
}

export default App;
