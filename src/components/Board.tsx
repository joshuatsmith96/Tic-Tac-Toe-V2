import BoardBox from './BoardBox';

interface Props{
  callback3: Function
}

function Board(props: Props) {

  //Recieved From Child
  let CurrentPlayer:String;
  let callback2 = (value:String) => {
    CurrentPlayer = value;
    console.log("In Board: " + CurrentPlayer)
    sendToParent(CurrentPlayer)
  }
  
  //Sending to parent
  const sendToParent =(msg:String) =>{
    props.callback3(msg)
  }
  return (
  <div className="Board">
    <div className="line-row-container">
      <div className="line-sub-container"><div className="line lrow-1"></div></div>
      <div className="line-sub-container"><div className="line lrow-2"></div></div>
      <div className="line-sub-container"><div className="line lrow-3"></div></div>
    </div>
     <BoardBox callback2 = {callback2} />
  </div>
  );
}

export default Board;
