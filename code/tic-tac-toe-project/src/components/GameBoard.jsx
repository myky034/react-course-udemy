import { useState } from "react";

export default function GameBoard({
  onSelectSquare,
  turns /*activePlayerSymbol*/,
  board,
}) {
  //Deriving state from props => dan xuat
  //cang quan ly it state cang tot va cang lay duoc nhieu thong tin tu state do cang tot

  //   const [gameboard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={
                      () =>
                        onSelectSquare(
                          rowIndex,
                          colIndex
                        ) /*() => handleSelectSquare(rowIndex, colIndex)*/
                    }
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
