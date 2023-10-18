import Board from "../components/Board";
import Popup from "../components/Popup";

import { useState } from "react";

function Game() {
  //Recieved From Child
  let callback3 = (value: any) => {
    setPlayer(value);
  };

  let player1 = window.localStorage.getItem("player1")
  player1 = JSON.parse(player1!).Name

  const [player, setPlayer] = useState(player1);

  return (
    <div className="Game">
      <Popup />
      <div className="text-center">
        <h1 className="title text-primary"><span className="btn-pink">Tic</span> <span className="btn-green">Tac</span> <span className="btn-red">Toe!</span></h1>
        <p className="text-white">{player}'s turn</p>
      </div>
      <Board callback3={callback3} />
    </div>
  );
}

export default Game;
