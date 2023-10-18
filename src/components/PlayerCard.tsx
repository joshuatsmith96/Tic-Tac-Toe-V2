//Importing Dependencies
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//Importing Images
import X from "../assets/Pieces/X.png";
import O from "../assets/Pieces/O.png";
import Vader from "../assets/Pieces/Vader.png";
import Pizza from "../assets/Pieces/Pizza.png";
import Icecream from "../assets/Pieces/Icecream Cone.png";
import BB8 from "../assets/Pieces/BB8.png"

interface Props {
  pId: string;
  player: string;
}

let allPlayers = {
  Player1: {
    id: "",
    Name: "",
    ImgPath: X.toString(),
  },
  Player2: {
    id: "",
    Name: "",
    ImgPath: O.toString(),
  },
};


function PlayerCard(props: Props) {
  //Saving Player Settings:
  const [playerName, setPlayerName] = useState("Player " + props.player);
  const [piece, setPiece] = useState({ X });
  let playerSettings = {
    Id: props.pId,
    Name: playerName,
    PathToPiece: piece,
  };





  //Modal Settings
  const [show, setShow] = useState(false);

  //Set default card icon
  let defaultCardIcon;

  if (props.pId === "P1") {
    defaultCardIcon = X;
  } else {
    defaultCardIcon = O;
  }

  //When settings get submitted
  let p1Icon = document.getElementsByClassName("cardIcon");

  const handleClose = () => {
    //if active, switch to disabled. If not active, get rid of disabled
    let allPieces = document.getElementsByClassName("board-piece-selection");
    let pieceContainer =
      document.getElementsByClassName("pieceContainer")[0].children.length;

    for(let i  = 0; i<pieceContainer; i++){
        if(allPieces[i].classList.contains("active") === true){
            allPieces[i].setAttribute("class", "board-piece-selection disabled")
        } else {
            console.log("Does not contain")
        }
    }



    if (playerSettings.Id === "P1") {
      allPlayers.Player1.Name = playerSettings.Name.toString();
      allPlayers.Player1.ImgPath = playerSettings.PathToPiece.toString();
      allPlayers.Player1.id = playerSettings.Id;
      p1Icon[0].setAttribute("src", playerSettings.PathToPiece.toString());
    } else {
      allPlayers.Player2.Name = playerSettings.Name.toString();
      allPlayers.Player2.ImgPath = playerSettings.PathToPiece.toString();
      allPlayers.Player2.id = playerSettings.Id;
      p1Icon[1].setAttribute("src", playerSettings.PathToPiece.toString());
    }
    window.localStorage.setItem("player1", JSON.stringify(allPlayers.Player1))
    window.localStorage.setItem("player2", JSON.stringify(allPlayers.Player2))
    defaultCardIcon = playerSettings.PathToPiece.toString();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  //Sets the player name with the input from the "Input" element
  const inputListener = (e: any) => {
    setPlayerName(e.target.value);
  };

  //Sets the active piece the player has chosen.
  const onPieceClick = (e: any) => {
    //Sets the piece into the player settings
    setPiece(e.target.src);

    //Reset all styles
    let pieceContainer =
      document.getElementsByClassName("pieceContainer")[0].children.length;
    let allPieces = document.getElementsByClassName("board-piece-selection");
    for (let i = 0; i <= pieceContainer - 1; i++) {
      allPieces[i].classList.remove("active");
    }

    //Set to active
    let ID = e.target.id;
    let Selected = document.getElementById(ID);
    Selected?.setAttribute("class", "board-piece-selection active");
  };

  return (
    <div id={props.pId} className="PlayerCard">
      <div className="NameAndPiece">
        <span className="player-number text-secondary">{props.player}</span><span className="bold">{playerName}</span>
        <img className="cardIcon" src={defaultCardIcon} alt="" />
      </div>
      <Button
        variant="primary"
        onClick={handleShow}
        className="EditButton"
      ></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Player Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <InputGroup className="mb-3" onChange={inputListener}>
            <InputGroup.Text id="inputGroup-sizing-default">
              Players Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <div className="piecePicker">
            <h3>Pick Your Game Piece</h3>
            <div className="pieceContainer">
              <img
                id="O"
                className="board-piece-selection"
                src={O}
                alt=""
                onClick={onPieceClick}
              />
              <img
                id="X"
                className="board-piece-selection"
                src={X}
                alt=""
                onClick={onPieceClick}
              />
              <img
                id="Icecream"
                className="board-piece-selection"
                src={Icecream}
                alt=""
                onClick={onPieceClick}
              />
              <img
                id="Pizza"
                className="board-piece-selection"
                src={Pizza}
                alt=""
                onClick={onPieceClick}
              />
              <img
                id="Vader"
                className="board-piece-selection"
                src={Vader}
                alt=""
                onClick={onPieceClick}
              />
              <img
                id="BB8"
                className="board-piece-selection"
                src={BB8}
                alt=""
                onClick={onPieceClick}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PlayerCard;