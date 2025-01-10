import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(true);
    //setIsEditing(isEditing ? false : true);
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  // function handleSaveClick() {
  //   setIsEditing(false);
  // }

  function handleChange(event) {
    setPlayerName(event.target.value);
    //console.log(event);
  }

  let edittablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    edittablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {/* Cach 1 */}
          {/* {isEditing === false ? (
            <span className="player-name">{name}</span>
          ) : (
            <input type="text" />
          )} */}
          {edittablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        {/* Cach 1 */}
        {/* {isEditing === false ? (
          <button onClick={handleEditClick}>Edit</button>
        ) : (
          <button onClick={handleSaveClick}>Save</button>
        )} */}
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
