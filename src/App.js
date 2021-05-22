import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to the Gaming Website</h1>
      <h3> Good Games :</h3>
      <a href="https://www.fortnite.com" target="_blank" rel="noreferrer">
        {" "}
        Fortnite{" "}
      </a>{" "}
      <br />
      <a href="https://www.minecraft.net" target="_blank" rel="noreferrer">
        {" "}
        Minecraft{" "}
      </a>
      <a href="https://www.roblox.com" target="_blank" rel="noreferrer">
        {" "}
        Roblox{" "}
      </a>
      <a href="https://www.nintendo.com" target="_blank" rel="noreferrer">
        {" "}
        Nintendo{" "}
      </a>
    </div>
  );
}
