let turnCount = 0;
let CurrentPlayer;

function Functionality(index: any, callback: Function) {
  const sendToParent =(msg:String) =>{
    callback(msg)
  }

  //Getting the board and the piece place holder
  let pieceString = index.toString();
  let pieceHolder = document.getElementById(pieceString);

  //Setting current playing player
  //First get players


  let player1 = window.localStorage.getItem("player1");
  let player2 = window.localStorage.getItem("player2");
  let ifWon;
  player1 = JSON.parse(player1!).Name
  player2 = JSON.parse(player2!).Name
  if(turnCount === 0){
    //player2
    CurrentPlayer = player2?.toString();
    ifWon = player1?.toString();
    
  } else {
    //player1
    CurrentPlayer = player1?.toString();
    ifWon = player2?.toString();
  }









  

  //Check if its Tic Tac Toe
  function checkBoard(n1:Number, n2:Number, n3:Number){
    let element;
    let isSelected1;
    let isSelected2;
    let isSelected3;
    let fString1;
    let fString2;
    let fString3;
    let options = [n1, n2, n3]

    for(let i=0; i<=options.length-1; i++){
      let box = "box-" + options[i];
      element = document.getElementsByClassName(box)[0].children[0].outerHTML;
      if(i === 0){
        fString1 = element!.split("<span id=\"B" + n1 + "\" ").pop()
        isSelected1 = document.getElementsByClassName(box)[0].children[0].classList.contains("selected")
      } else if(i === 1){
        fString2 = element!.split("<span id=\"B" + n2 + "\" ").pop()
        isSelected2 = document.getElementsByClassName(box)[0].children[0].classList.contains("selected")
      } else if(i === 2){
        fString3 = element!.split("<span id=\"B" + n3 + "\" ").pop()
        isSelected3 = document.getElementsByClassName(box)[0].children[0].classList.contains("selected")
      }
      if (fString1 === fString2 && fString1 === fString3 && fString2 === fString3 && isSelected1 === true && isSelected2 === true && isSelected3 === true) { // && isSelected1 === true && isSelected2 === true && isSelected3 === true
        TicTacToe(n1, n2, n3)
      }
    }

    let board = document.getElementsByClassName("Board")[0].children;
    let selected = []
    for (let i=1; i<=board.length - 1; i++){
      let item = document.getElementsByClassName("box-" + i)[0].children[0]
      if(item.classList.contains("selected") === true){
        selected.push(item)
      }
    }
    if(selected.length === board.length-1){
      Popup("No One")
    }
      
  }

  function TicTacToe(n1:Number, n2:Number, n3:Number){
    let options = [n1, n2, n3]
    Popup("");
  }

  function Popup(msg:String){
        //Enable Popup
        let Popup = document.getElementById("Popup")
        let popupH1 = document.getElementById("popup-h1")
        Popup!.setAttribute(
          "style",
          "visibility: visible"
        );
        setTimeout(() => {
          if(msg === ""){
            popupH1!.innerHTML = ifWon! + " Won"
          } else {
            popupH1!.innerHTML = msg + " Won"
          }
          
          popupH1!.setAttribute(
            "style",
            "color: rgb(0, 0, 0)"
          );
        }, 500);
  }



  //Before running, check to see if box has already been checked. If not, continue.
  if (pieceHolder?.classList.contains("selected") === true){
    pieceHolder.style.backgroundColor="red"
    setTimeout(() => {
        pieceHolder!.style.backgroundColor="initial"
    }, 50);
    
  } else {
    if (pieceHolder === null) {
        console.error(Error)
      } else {
        //Getting player data from local storage
        let player = "player" + (turnCount + 1);
        let data = window.localStorage.getItem(player);
        let piece = JSON.parse(data!).ImgPath.toString();
        pieceHolder.setAttribute(
          "style",
          "background-image: url('" + piece + "');"
        );
        pieceHolder.setAttribute("class", "piece-placeholder selected")
      }

      if(pieceHolder?.classList.contains("selected") === true){
        //Checking Rows For Tic Tac Toe
        checkBoard(1, 2, 3);
        checkBoard(4, 5, 6);
        checkBoard(7, 8, 9);
        //Checking Columns For Tic Tac Toe
        checkBoard(1, 4, 7);
        checkBoard(2, 5, 8);
        checkBoard(3, 6, 9);
        //Checking Diagonals
        checkBoard(1, 5, 9);
        checkBoard(3, 5, 7);
      }
    
      if (turnCount === 0) {
        turnCount++;
      } else {
        turnCount = 0;
      }
  }

  return(
    sendToParent(CurrentPlayer!)
  )
  
}

export default Functionality;
