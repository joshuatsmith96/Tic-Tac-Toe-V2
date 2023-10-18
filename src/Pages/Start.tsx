import { Link } from "react-router-dom"
import PlayerCard from '../components/PlayerCard'
//Images
import X from "../assets/Pieces/X.png";
import O from "../assets/Pieces/O.png";

function Start() {
  //Setting up defaults:
  let allPlayers = {
    Player1: {
      id: "",
      Name: "Player 1",
      ImgPath: X.toString(),
    },
    Player2: {
      id: "",
      Name: "Player 2",
      ImgPath: O.toString(),
    },
  };

  window.localStorage.setItem("player1", JSON.stringify(allPlayers.Player1))
  window.localStorage.setItem("player2", JSON.stringify(allPlayers.Player2))

  return (
    <div className="Start text-center">
      <h1><span className="btn-pink">Tic</span> <span className="btn-green">Tac</span> <span className="btn-red">Toe</span></h1>
      <div className="center card-holder">
      <PlayerCard player="1" pId="P1"/>
      <PlayerCard player="2" pId="P2"/>
      </div>
      <Link className="start-button" to="/Game">Start Game</Link>
    </div>
  );
}

export default Start;
