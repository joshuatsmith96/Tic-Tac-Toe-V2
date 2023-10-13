document.addEventListener('click', (evt) => {
    const { target } = evt;
    if (target instanceof HTMLElement) {
        console.log(evt.target.id)
    }
});


function Board() {
    return(
        <div className="Board">
            <div id="1" className="board-box box-1" data-value="1"></div>
            <div id="2" className="board-box box-2"></div>
            <div id="3" className="board-box box-3"></div>
            <div id="4"className="board-box box-4"></div>
            <div id="5" className="board-box box-5"></div>
            <div id="6" className="board-box box-6"></div>
            <div id="7" className="board-box box-7"></div>
            <div id="8" className="board-box box-8"></div>
            <div id="9"className="board-box box-9"></div>
        </div>
    )
}

export default Board;