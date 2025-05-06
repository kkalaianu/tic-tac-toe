import React from "react";
import Square from "./Square";

const GameBoard = ({ board, onClick, N }) => {
  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${N}, 60px)` }}>
      {board.map((row, i) =>
        row.map((cell,j) => (
            <Square key={`${i}-${j}`} value={cell} onClick={() => onClick(i, j)} />
        
        ))
      )}
    </div>
  );
}

export default GameBoard;
