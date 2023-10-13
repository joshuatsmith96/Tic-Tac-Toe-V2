import { Link } from "react-router-dom"
import PlayerCard from '../components/PlayerCard'

function Start() {
  return (
    <div className="Start text-center">
      <h1>Start Page</h1>
      <div className="center">
      <PlayerCard player="1" pId="P1"/>
      <PlayerCard player="2" pId="P2"/>
      </div>
      <Link to="/Game">Start Game</Link>
    </div>
  );
}

export default Start;
