import { Link } from 'react-router-dom'

function Popup(){
    return(
        <div id="Popup">
            <h1 id="popup-h1">This person won!</h1>
            <button onClick={() => {window.location.reload();}}>New Game</button>
            <Link to="/" className="menu_button">Main Menu</Link>
        </div>
    )
}

export default Popup;