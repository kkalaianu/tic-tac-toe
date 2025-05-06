# 🧠 Advanced Tic-Tac-Toe (N x N Grid, M in a Row)

This project is a flexible and modern implementation of the classic **Tic-Tac-Toe** game using **React**. Unlike the traditional 3x3 grid, this version supports **dynamic board sizes** (`N x N`) and custom **win conditions** (`M` marks in a row to win).

## 🚀 Features

- ✅ Customizable grid size (N x N)
- ✅ Configurable win condition (M in a row)
- 🔁 Turn-based gameplay (X vs O)
- 🏆 Win, draw detection across rows, columns, and diagonals
- 💾 Game state saved in local storage (restores after refresh)
- 🔁 Reset and restart game options
- 📱 Responsive layout

## 🛠 Tech Stack

- React (with functional components and hooks)
- CSS for layout and styling

## 📦 Project Structure

── public/
├── src/
│ ├── components/
│ │ ├── GameBoard.jsx
│ │ └── Square.jsx
│ ├── App.jsx
│ ├── index.js
│ └── index.css
├── package.json
└── README.md

#Install dependencies

npm install

#Run the app

npm start

Open your browser and go to http://localhost:3000.

🧪 How to Play
Choose the grid size (N) and how many in a row (M) it takes to win.

Click Start Game to begin.

Players take turns clicking cells to place X or O.

The game announces a winner or a draw.

Use Reset or Back to Configuration to restart or reconfigure.

💡 Customization Ideas
Add player name inputs

Add move history

Add dark mode

Add AI opponent

📄 License
This project is open source under the MIT License.

