//Import dependecies
import "./App.css";
import './Board.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import Pages
import Start from './Pages/Start'
import Game from './Pages/Game'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Start />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
