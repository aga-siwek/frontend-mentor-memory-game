import styles from "./Summary.module.css";
import ButtonLarge from "../../common/buttons/ButtonLarge.jsx";
import ButtonMedium from "../../common/buttons/ButtonMedium.jsx";

function Summary({
  onRestartGame,
  onNewGame,
  score,
  gamePlayers,
  gameTime,
  gameMoves,
}) {
  const maxScore = Math.max(...Object.values(score));
  const winners = Object.keys(score).filter(
    (player) => score[player] === maxScore,
  );
  const sortedDesc = Object.fromEntries(
    Object.entries(score).sort(([, a], [, b]) => b - a),
  );

  const secondsToTime = () => {
    const hrs = Math.floor(gameTime / 3600);
    const mins = Math.floor((gameTime % 3600) / 60);
    const secs = gameTime % 60;
    const time = [hrs, mins, secs]
        .map((v) => String(v).padStart(2, "0"))
        .join(":");

    return <p>{time}</p>;
  };

  const showHeader = () => {
    if (gamePlayers === "1") {
      return <h2 className={styles.header_text}>You did it!</h2>;
    } else if (winners.length > 1) {
      return <h2 className={styles.header_text}>It’s a tie!</h2>;
    } else if (winners[0] === "PLAYER1") {
      return <h2 className={styles.header_text}>Player 1 Wins!</h2>;
    } else if (winners[0] === "PLAYER2") {
      return <h2 className={styles.header_text}>Player 2 Wins!</h2>;
    } else if (winners[0] === "PLAYER3") {
      return <h2 className={styles.header_text}>Player 3 Wins!</h2>;
    } else if (winners[0] === "PLAYER4") {
      return <h2 className={styles.header_text}>Player 4 Wins!</h2>;
    }
  };

  const showBody = () => {
    if (gamePlayers === "1") {
      return (
        <p className={styles.body_text}>Game over! Here’s how you got on…</p>
      );
    } else {
      return (
        <p className={styles.body_text}>Game over! Here are the results…</p>
      );
    }
  };

  const showResult = () => {
    const prettyPlayerName = (name) => {
      if (name === "PLAYER1") {
        return "Player 1";
      } else if (name === "PLAYER2") {
        return "Player 2";
      } else if (name === "PLAYER3") {
        return "Player 3";
      } else if (name === "PLAYER4") {
        return "Player 4";
      }
    };
    const showPlayersScore = (num) => {
      const playersInGame = Object.entries(sortedDesc).slice(0, num);
      return playersInGame.map(([key, value]) => (
        <div className={styles.result}>
          {winners.includes(key) && (
            <div className={styles.result_box_win}>
              <div className={styles.result_box_header_win}>
                {prettyPlayerName(key)} (Winner!)
              </div>
              <div className={styles.result_box_text_win}>{value} Pairs</div>
            </div>
          )}
          {!winners.includes(key) && (
            <div className={styles.result_box}>
              <div className={styles.result_box_header}>
                {prettyPlayerName(key)}
              </div>
              <div className={styles.result_box_text}>{value} Pairs</div>
            </div>
          )}
        </div>
      ));
    };

    if (gamePlayers === "1") {
      return (
        <div className={styles.result}>
          <div className={styles.result_box}>
            <div className={styles.result_box_header}>Time Elapsed</div>
            <div className={styles.result_box_text}>{secondsToTime()}</div>
          </div>

          <div className={styles.result_box}>
            <div className={styles.result_box_header}>Moves Taken</div>
            <div className={styles.result_box_text}>{gameMoves} Moves</div>
          </div>
        </div>
      );
    } else if (gamePlayers === "2") {
      return <div className={styles.result}>{showPlayersScore(2)}</div>;
    } else if (gamePlayers === "3") {
      return <div className={styles.result}>{showPlayersScore(3)}</div>;
    } else if (gamePlayers === "4") {
      return <div className={styles.result}>{showPlayersScore(4)}</div>;
    }
  };

  return (
    <div className={styles.summary_background}>
      <div className={styles.summary_container}>
        <div className={styles.summary_top}>
          <div className={styles.summary_top_header}>{showHeader()}</div>
          <div className={styles.summary_top_body}>{showBody()}</div>
        </div>
        {showResult()}
        <div className={styles.buttons_mobile}>
          <ButtonLarge
            text="Restart"
            color="orange"
            onClick={() => onRestartGame()}
          />
          <ButtonLarge
            text="Setup New Game"
            color="grey"
            onClick={() => onNewGame()}
          />
        </div>
        <div className={styles.buttons_other_dev}>
          <ButtonMedium
              text="Restart"
              color="orange"
              onClick={() => onRestartGame()}
          />
          <ButtonMedium
              text="Setup New Game"
              color="grey"
              onClick={() => onNewGame()}
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;
