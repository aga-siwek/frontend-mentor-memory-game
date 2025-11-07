import styles from "./MainGame.module.css";
import { useDispatch, useSelector } from "react-redux";
import GameBoard from "./game_board/GameBoard.jsx";
import Summary from "./summary/Summary.jsx";
import {
  continueGame,
  exitGame,
  finishGame,
  GAME_STATE,
  makeMove,
  pauseGame,
  restartGame,
  startGame,
} from "../../store/gameSlice.js";
import Menu from "./menu/Menu.jsx";

function MainGame() {
  const dispatch = useDispatch();
  const gameTheme = useSelector((state) => state.game.gameTheme);
  const gamePlayers = useSelector((state) => state.game.gamePlayers);
  const gameTime = useSelector((state) => state.game.player1TimeSec);
  const gameMoves = useSelector((state) => state.game.player1Moves);
  const score = useSelector((state) => state.game.score);
  const board = useSelector((state) => state.game.board);
  const gameState = useSelector((state) => state.game.gameState);
  const gridSize = useSelector((state) => state.game.gridSize);
  const activePlayer = useSelector((state) => state.game.activePlayer);
  const foundPairs = useSelector((state) => state.game.foundPairs);
  const firstClick = useSelector((state) => state.game.firstClick);
  const secondClick = useSelector((state) => state.game.secondClick);
  console.log("time", gameTime);

  const onRestartGame = () => {
    dispatch(restartGame());
  };
  const onContinueGame = () => {
    dispatch(continueGame());
  };
  const onNewGame = () => {
    dispatch(exitGame());
  };
  const onResumeGame = () => {
    dispatch(finishGame());
  };
  const onPauseGame = () => {
    dispatch(pauseGame());
  };

  const onMakeMove = (move) => {
    dispatch(makeMove(move));
  };

  return (
    <div className={styles.main_game_container}>
      <GameBoard
        board={board}
        gridSize={gridSize}
        gamePlayers={gamePlayers}
        score={score}
        gameTime={gameTime}
        activePlayer={activePlayer}
        onPauseGame={onPauseGame}
        foundPairs={foundPairs}
        firstClick={firstClick}
        secondClick={secondClick}
        onMakeMove={onMakeMove}
        gameMoves={gameMoves}
      />
      {gameState === GAME_STATE.ROUND_SUMMARY && (
        <Summary
          onRestartGame={onRestartGame}
          onNewGame={onNewGame}
          score={score}
          gamePlayers={gamePlayers}
          gameTime={gameTime}
          gameMoves={gameMoves}
        />
      )}
      {gameState === GAME_STATE.PAUSE && (
        <Menu
          onRestartGame={onRestartGame}
          onNewGame={onNewGame}
          onResumeGame={onResumeGame}
          onContinueGame={onContinueGame}
        />
      )}
    </div>
  );
}

export default MainGame;
