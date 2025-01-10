import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayername, setEnteredPlayerName] = useState(null);
  //const [submitted, setSubmitted] = useState(false);

  // function handleChange(e) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // }

  function handleClick() {
    //setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>
        Welcome{" "}
        {
          /*submitted enteredPlayername ? enteredPlayername : "unknown entity"*/
          enteredPlayername ?? "unknown entity"
        }
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
          //onChange={handleChange}
          //value={enteredPlayername}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
