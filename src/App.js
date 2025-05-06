import React, { useState} from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [N, setN] = useState(5);
  const [M, setM] = useState(4);
  const [board, setBoard] = useState([]);
  const [xIsNext, setxIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
    
      const createEmptyBoard = (size) => 
        Array(size).fill(null).map(() => Array(size).fill(null));
      
      const startGame = () => {
      setBoard(createEmptyBoard(N));
      setxIsNext(true);
      setWinner(null);
      setGameStarted(true);
      };
    const handleClick = (row, col) => {
      if(board[row][col] || winner) return;
      const newBoard = board.map((r, i) =>
        r.map((cell,j) => (i === row && j === col ? (xIsNext ? "X" : "O") : cell))
    );
    setBoard(newBoard);
    const currentPlayer = xIsNext ? "X" : "O";
    if (checkWinner(newBoard, row, col, currentPlayer)) {
      setWinner(currentPlayer);
    } else if (newBoard.flat().every((cell) => cell !== null)) {
      setWinner("Draw");
    } else {
      setxIsNext(!xIsNext);
    }
    
  };
  const checkWinner = (board, row, col, player) => {
    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1]
    ];
    for (let [dx, dy] of directions) {
      let count = 1;
      for (let dir of [-1, 1]) {
        let r = row + dir * dx;
        let c = col + dir * dy;
        while (r >=0 && r < N && c >= 0 && c < N && board[r][c] === player) {
          count++;
          r += dir * dx;
          c += dir * dy;
        }
      }
      if (count >= M) return true;
    }
    return false;
  };
  const resetGame = () => {
    setBoard(createEmptyBoard(N));
    setxIsNext(true);
    setWinner(null);
  };
  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      {!gameStarted ? (
        <div className="config-form">
          <label>
            Board Size (N):
            <input
              type="number"
              min="3"
              value={N}
              onChange={(e) => setN(Number(e.target.value))}
              />
          </label>
          <label>
            Win Condition (M):
            <input
              type="number"
              min="3"
              value={M}
              onChange={(e) => setM(Number(e.target.value))}
              />
          </label>
          <button onClick={startGame}>Start Game</button>
          </div>
      ) : (
        <>
        <div className="status">
          {winner
            ? winner === "Draw"
             ? "It's a Draw!"
             : `Winner: ${winner}`
           : `Next Player: ${xIsNext ? "X" : "O"}`} 
          </div>
          <GameBoard
             board={board}
             onClick={handleClick}
             N={N}
             />
             <button className="reset" onClick={resetGame}>
                Reset
             </button>
        </>
      )}
    </div>
  );
};

export default App;
