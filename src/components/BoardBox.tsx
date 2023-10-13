function BoardBox() {
  //This 'index' number keeps track of where on the board is clicked.
  let index = 1;

  //Function that runs when a tic tac toe box is clicked
  const boxClicked = (e: any) => {
    index = e.target.id;
    //Get whole board
    console.log(index)
    let Board = document.querySelector(".Board");
    let pieceHolder = Board?.children[index-1].children[0]
    pieceHolder!.innerHTML = "X"
  };

  //This creates each individual clickable box on the board
  let boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let boxes = boxArray.map((box) => {
    let classname = "board-box box-" + box;
    return (
      <div
        key={box}
        id={box.toString()}
        className={classname}
        onClick={boxClicked}
      ><span className="piece-placeholder"></span></div>
    );
  });

  return <>{boxes}</>;
}

export default BoardBox;
