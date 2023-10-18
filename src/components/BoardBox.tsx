import Functionality from "./Functionality";

interface Props{
  callback2: Function
}

function BoardBox(props: Props) {

  //Recieved From Child
  let CurrentPlayer:String;
  let callback = (value:String) => {
    CurrentPlayer = value;
    sendToParent(CurrentPlayer)
  }

    //SENDING TO PARENT
    const sendToParent =(msg:String) =>{
      props.callback2(msg)
      
    }

  //Function that runs when a tic tac toe box is clicked
  let index;
  const boxClicked = (e: any) => {
    index = e.target.id
    //--------------- GAME FUNCTIONALITY -------------
    Functionality(index, callback)
  };

  //This creates each individual clickable box on the board
  let boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let boxes = boxArray.map((box) => {
    let classname = "board-box box-" + box;
    return (
      <div
        key={box}
        className={classname}
        onClick={boxClicked}
      ><span id={'B' + box.toString()} className="piece-placeholder"></span>
      </div>
    );
  });

  return <>{boxes}</>;
}

export default BoardBox;
