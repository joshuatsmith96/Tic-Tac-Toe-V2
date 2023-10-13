import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import X from '../assets/X.jpg'

interface Props {
  pId: string;
  player: string;
}

function PlayerCard(props: Props) {
  //Saving Player Settings:
  const [playerName, setPlayerName] = useState("Player " + props.player);

  //Modal Settings (dont touch)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Sets the player name with the input from the "Input" element
  const inputListener = (e: any) => {
    setPlayerName(e.target.value);
  };

  //Sets the active piece the player has chosen.
  const onPieceClick = (e:any) => {
    let ID = "#" + e.target.id;
    let element = document.querySelector(ID)
    console.log(element)
  }

  return (
    <div id={props.pId} className="PlayerCard">
      <div>
        <span className="text-secondary">{props.player}</span> {playerName}
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
              Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <div className="piecePicker">
            <h3>Pick Your Game Piece</h3>
            <div className="pieceContainer" onClick={onPieceClick}>
            <img id="piece" className="board-piece-selection" src={X} alt=""/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PlayerCard;
