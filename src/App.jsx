import "./App.css";
import { GAME_STATE } from "./store/gameSlice.js";
import Welcome from "./components/welcome/Welcome.jsx";
import MainGame from "./components/main_game/MainGame.jsx";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const gameState = useSelector((state) => state.game.gameState);
  const backgroundStyle = () => {
    if (gameState === GAME_STATE.WELCOME) {
      return "container_dark";
    } else {
      return "container_light";
    }
  };
  return (
    <div className={backgroundStyle()}>
      {gameState === GAME_STATE.WELCOME ? <Welcome /> : <MainGame />}
    </div>
  );
}

export default App;
