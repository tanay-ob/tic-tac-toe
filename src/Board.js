import Box from "./Box";
import { useState } from "react";

function Board() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [curSign, setCurSign] = useState("X");

  const checkForWinner = () => {
    if (boxes[0] !== "" && boxes[0] === boxes[1] && boxes[1] === boxes[2]) {
      alert("We got winner: " + boxes[0]);
    }
  };

  const addSign = (idx) => {
    // if box is filled, no need to do anything
    if (boxes[idx] !== "") {
      return;
    }

    // update the box value
    const newboxes = boxes.slice();
    newboxes[idx] = curSign;
    setBoxes(newboxes);

    checkForWinner();

    // update the sign
    setCurSign(curSign === "O" ? "X" : "O");
  };

  return (
    <div className="board">
      {boxes.map((boxValue, idx) => (
        <Box sign={boxValue} addSign={() => addSign(idx)} />
      ))}
    </div>
  );
}

export default Board;
