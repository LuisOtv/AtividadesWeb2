import "./App.css";
import { Logo, Tip, Attempts, Letter, Guess, Used } from "./components";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5fa", padding: "50px", borderRadius: "15px" }}>
        <Logo />
        <Attempts label="0" />
        <Tip label={"Aqui vai a dica"} />
        <div style={{ alignItems: "center", justifyItems: "center" }} className="Letters">
          <Letter label="0"></Letter>
        </div>
        <div style={{ alignItems: "start", justifyItems: "start" }} className="Letters">
          <Guess></Guess>
          <Used></Used>
        </div>
      </div>
    </>
  );
}

export default App;
