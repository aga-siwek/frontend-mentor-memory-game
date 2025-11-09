import styles from "./GameBoard.module.css";
import Header from "./Header.jsx";
import MainBoard from "./MainBoard.jsx";
import GameSummary from "./GameSummary.jsx";

function GameBoard({
                       board,
                       gridSize,
                       gamePlayers,
                       score,
                       gameTime,
                       activePlayer,
                       onPauseGame,
                       foundPairs,
                       firstClick,
                       secondClick,
                       onMakeMove,
                       gameMoves,
                       onRestartGame,
                       onNewGame


                   }) {
    return (
        <div className={styles.game_board_container}>
            <Header onPauseGame={onPauseGame} onRestartGame={onRestartGame} onNewGame={onNewGame}/>
            <MainBoard
                board={board}
                gridSize={gridSize}
                foundPairs={foundPairs}
                firstClick={firstClick}
                secondClick={secondClick}
                onMakeMove={onMakeMove}
            />
            <GameSummary
                gamePlayers={gamePlayers}
                score={score}
                gameTime={gameTime}
                activePlayer={activePlayer}
                gameMoves={gameMoves}
            />
        </div>
    );
}

export default GameBoard;
