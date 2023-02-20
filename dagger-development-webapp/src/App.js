import './App.css';
//import BoardTile from "./client/components/GameBoard/BoardTile"
import Player from './client/components/GamePlayer'
import GameBoard from './client/components/GameBoard'

function App() {
  return (
    <div className="board">
        <GameBoard />
        <Player />
    </div>
  );
}

export default App;
