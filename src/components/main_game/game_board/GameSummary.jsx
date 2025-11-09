import styles from "./GameSummary.module.css";
import { ACTIVE_PLAYER, PLAYERS_NUMBER } from "../../../store/gameSlice.js";

function GameSummary({
  gamePlayers = "1",
  score,
  gameTime = 0,
  activePlayer,
  gameMoves,
}) {
  const secondsToTime = () => {
    const hrs = Math.floor(gameTime / 3600);
    const mins = Math.floor((gameTime % 3600) / 60);
    const secs = gameTime % 60;
    const time = [hrs, mins, secs]
      .map((v) => String(v).padStart(2, "0"))
      .join(":");

    return <p>{time}</p>;
  };
  const seeActivePlayer1 = () => {
    if (activePlayer === ACTIVE_PLAYER.PLAYER1) return styles.activePlayer;
    else {
      return styles.unactivePlayer;
    }
  };
  const seeActivePlayer2 = () => {
    if (activePlayer === ACTIVE_PLAYER.PLAYER2) return styles.activePlayer;
    else {
      return styles.unactivePlayer;
    }
  };
  const seeActivePlayer3 = () => {
    if (activePlayer === ACTIVE_PLAYER.PLAYER3) return styles.activePlayer;
    else {
      return styles.unactivePlayer;
    }
  };
  const seeActivePlayer4 = () => {
    if (activePlayer === ACTIVE_PLAYER.PLAYER4) return styles.activePlayer;
    else {
      return styles.unactivePlayer;
    }
  };

  const gameContainer = () => {
    if (gamePlayers === "1") {
      return (
        <div className={styles.game_summary_container_one_player}>
          <div className={styles.game_summary_box_one_player}>
            <div className={styles.game_summary_box_header}>Time</div>
            <div className={styles.game_summary_box_result}>
              {secondsToTime()}
            </div>
          </div>

          <div className={styles.game_summary_box_one_player}>
            <div className={styles.game_summary_box_header}>Moves</div>
            <div className={styles.game_summary_box_result}>{gameMoves}</div>
          </div>
        </div>
      );
    } else if (gamePlayers === "2") {
      return (
        <div className={styles.game_summary_container}>
          <div className={`${styles.game_summary_box} ${seeActivePlayer1()}`}>
            <div className={styles.game_summary_box_header}>P1</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER1}
            </div>
          </div>

          <div className={`${styles.game_summary_box} ${seeActivePlayer2()}`}>
            <div className={styles.game_summary_box_header}>P2</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER2}
            </div>
          </div>
        </div>
      );
    } else if (gamePlayers === "3") {
      return (
        <div className={styles.game_summary_container}>
          <div className={`${styles.game_summary_box} ${seeActivePlayer1()}`}>
            <div className={styles.game_summary_box_header}>P1</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER1}
            </div>
          </div>

          <div className={`${styles.game_summary_box} ${seeActivePlayer2()}`}>
            <div className={styles.game_summary_box_header}>P2</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER2}
            </div>
          </div>

          <div className={`${styles.game_summary_box} ${seeActivePlayer3()}`}>
            <div className={styles.game_summary_box_header}>P3</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER3}
            </div>
          </div>
        </div>
      );
    } else if (gamePlayers === "4") {
      return (
        <div className={styles.game_summary_container}>
          <div className={`${styles.game_summary_box} ${seeActivePlayer1()}`}>
            <div className={styles.game_summary_box_header}>P1</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER1}
            </div>
          </div>

          <div className={`${styles.game_summary_box} ${seeActivePlayer2()}`}>
            <div className={styles.game_summary_box_header}>P2</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER2}
            </div>
          </div>

          <div className={`${styles.game_summary_box} ${seeActivePlayer3()}`}>
            <div className={styles.game_summary_box_header}>P3</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER3}
            </div>
          </div>
          <div className={`${styles.game_summary_box} ${seeActivePlayer4()}`}>
            <div className={styles.game_summary_box_header}>P4</div>
            <div className={styles.game_summary_box_result}>
              {score.PLAYER4}
            </div>
          </div>
        </div>
      );
    }
  };

  return gameContainer();
}
export default GameSummary;
