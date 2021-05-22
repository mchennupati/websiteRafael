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
      </a>{" "}
      <br />
      <img
        src="https://cdn2.unrealengine.com/battle-pass-chapter-2-season-6-1920x1080-dc8eb73dc494.jpg"
        alt="fortnite"
      />
      {/* <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/watch?v=9yCFCxJk5hE"
        title="MineCraft"
      >
        Ronald Omg !
      </iframe> */}
    </div>
  );
}
