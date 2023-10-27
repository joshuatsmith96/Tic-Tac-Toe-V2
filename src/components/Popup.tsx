import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'



function Popup(){
    const navigate = useNavigate();
    return(
        <div id="Popup">
            <h1 id="popup-h1">This person won!</h1>
            <button onClick={() => {navigate(0)}}>New Game</button>
            <Link to="/Tic-Tac-Toe-V2" className="menu_button">Main Menu</Link>
        </div>
    )
}

export default Popup;