document.addEventListener('click', (evt) => {
    console.log(evt)
});

let boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let boxes = boxArray.map((box) => {
    console.log(box)
    let classname = "board-box box-" + box;
    return(
        <div key={box} className={classname}></div>
    )
})

function Board() {
    return(
        <div className="Board">
            {boxes}
            {/* <div id="1" className="board-box box-1"></div>
            <div id="2" className="board-box box-2"></div>
            <div id="3" className="board-box box-3"></div>
            <div id="4"className="board-box box-4"></div>
            <div id="5" className="board-box box-5"></div>
            <div id="6" className="board-box box-6"></div>
            <div id="7" className="board-box box-7"></div>
            <div id="8" className="board-box box-8"></div>
            <div id="9"className="board-box box-9"></div> */}
        </div>
    )
}

export default Board;