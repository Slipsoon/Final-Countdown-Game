import { useRef, useState } from "react";

export default function Player() {
  const playerNameInputValue = useRef();
  const [playerName, setPlayerName] = useState();

  function handlePlayerName() {
    setPlayerName(playerNameInputValue.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerNameInputValue} />
        <button onClick={handlePlayerName}>Set Name</button>
      </p>
    </section>
  );
}
