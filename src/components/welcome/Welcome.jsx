import styles from "./Welcome.module.css";
import LogoLight from "../common/logo/LogoLight.jsx";
import InformationBoard from "./InformationBoard.jsx";
import {
  chooseGridSize,
  choosePlayersNumber,
  chooseTheme,
  startGame,
} from "../../store/gameSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Welcome() {
  const dispatch = useDispatch();
  const gameTheme = useSelector((state) => state.game.gameTheme);
  const gamePlayers = useSelector((state) => state.game.gamePlayers);
  const gridSize = useSelector((state) => state.game.gridSize);

  const selectTheme = (selected) => {
    dispatch(chooseTheme(selected));
  };

  const selectPlayers = (selected) => {
    dispatch(choosePlayersNumber(selected));
  };

  const selectGridSize = (selected) => {
    dispatch(chooseGridSize(selected));
  };

  const onStartGame = () => {
    dispatch(startGame());
  };

  return (
    <div className={styles.welcome_container}>
      <LogoLight />
      <InformationBoard
        gameTheme={gameTheme}
        gamePlayers={gamePlayers}
        gridSize={gridSize}
        selectTheme={selectTheme}
        selectPlayers={selectPlayers}
        selectGridSize={selectGridSize}
        onStartGame={onStartGame}
      />
    </div>
  );
}

export default Welcome;
