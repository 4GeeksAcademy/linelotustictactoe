import React, { useState } from "react";
import Game from "./Bpage"

function PlayerSelection({ onStart }) {
  const [player1Choice, setPlayer1Choice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");


  const handleChoice = (choice) => {
    setPlayer1Choice(choice);
    setPlayer2Choice(choice === "X" ? "O" : "X");
  };


  const handleStart = () => {
    if (player1Choice && player2Choice) {
      onStart({ player1: player1Choice, player2: player2Choice });
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen btn btn-light">
      <input type="text" id="player1" placeholder="Enter player 1 name"></input>
      <input type="text" id="player2" placeholder="Enter player 2 name"></input>
      <h1 className="text-3xl font-bold mb-6">Choose X or O</h1>
     
      <div className="flex ">
        <button
          className={`px-6 py-3 text-xl rounded-lg ${
            player1Choice === "X" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleChoice("X")}>  X
        </button>

       
        <button
          className={`px-6 py-3 text-xl rounded-lg ${
            player1Choice === "O" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleChoice("O")}>  O
        </button>
        
      </div>


      {player1Choice && (
        <div className="mt-6 text-lg">
          Player 1: <strong>{player1Choice}</strong> | Player 2:{" "}
          <strong>{player2Choice}</strong>
        </div>
      )}


      <button
        disabled={!player1Choice}
        className={`mt-8 px-6 py-3 text-xl rounded-lg ${
          player1Choice ? "bg-green-500 text-white" : "bg-gray-400"
        }`}
        onClick={handleStart}> Start Game </button>
    </div>
  );
}


function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState({});


  const handleStart = (players) => {
    setPlayers(players);
    setGameStarted(true);
  };


  return (
    <div>
      {!gameStarted ? (
        <PlayerSelection onStart={handleStart} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
          <p>
            Player 1 ({players.player1}) vs Player 2 ({players.player2})
          </p>
          
          <Game />
          

        </div>
      )}
    </div>
  );
}


export default App;
