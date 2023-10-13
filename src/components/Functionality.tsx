function Functionality(index:number){
    //Getting the board and the piece place holder
    let Board = document.querySelector(".Board");
    let pieceHolder = Board?.children[index-1].children[0];
    console.log("Square #" + index + " was clicked. Piece will be placed in " + pieceHolder)
}

export default Functionality;