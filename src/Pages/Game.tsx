import Board from "../components/Board";

function Game() {
  return (
    <div className="Game">
      <div className="text-center">
        <h1 className="text-primary">Tic Tac Toe!</h1>
        <p className="text-secondary">#blanks# turn</p>
      </div>
      <Board />
    </div>
  );
}

export default Game;
