import styles from "./InformationBoard.module.css";
import ButtonLarge from "../common/buttons/ButtonLarge.jsx";
import {
  GAME_THEME,
  GRID_SIZE,
  PLAYERS_NUMBER,
} from "../../store/gameSlice.js";

function InformationBoard({
  gameTheme,
  gamePlayers,
  gridSize,
  selectTheme,
  selectPlayers,
  selectGridSize,
  onStartGame,
}) {
  const gameThemeStyleIcons = () => {
    if (gameTheme === GAME_THEME.ICON) {
      return styles.active_file;
    } else if (gameTheme === GAME_THEME.NUMBER) {
      return styles.inactive_file;
    }
  };
  const gameThemeStyleNumbers = () => {
    if (gameTheme === GAME_THEME.ICON) {
      return styles.inactive_file;
    } else if (gameTheme === GAME_THEME.NUMBER) {
      return styles.active_file;
    }
  };
  const gameGridStyleSmall = () => {
    if (gridSize === GRID_SIZE.SMALL) {
      return styles.active_file;
    } else if (gridSize === GRID_SIZE.BIG) {
      return styles.inactive_file;
    }
  };
  const gameGridStyleBig = () => {
    if (gridSize === GRID_SIZE.SMALL) {
      return styles.inactive_file;
    } else if (gridSize === GRID_SIZE.BIG) {
      return styles.active_file;
    }
  };

  const gamePlayersStyle1 = () => {
    if (gamePlayers === PLAYERS_NUMBER["1"]) {
      return styles.active_file;
    } else {
      return styles.inactive_file;
    }
  };

  const gamePlayersStyle2 = () => {
    if (gamePlayers === PLAYERS_NUMBER["2"]) {
      return styles.active_file;
    } else {
      return styles.inactive_file;
    }
  };

  const gamePlayersStyle3 = () => {
    if (gamePlayers === PLAYERS_NUMBER["3"]) {
      return styles.active_file;
    } else {
      return styles.inactive_file;
    }
  };

  const gamePlayersStyle4 = () => {
    if (gamePlayers === PLAYERS_NUMBER["4"]) {
      return styles.active_file;
    } else {
      return styles.inactive_file;
    }
  };

  return (
    <div className={styles.info_container}>
      <div className={styles.setting}>
        <div className={styles.setting_box}>
          <div className={styles.setting_box_header}>Select Theme</div>
          <div className={styles.single_setting}>
            <button
              className={`${styles.setting_button} ${styles.setting_theme_button} ${gameThemeStyleNumbers()}`}
              onClick={() => selectTheme(GAME_THEME.NUMBER)}
            >
              Numbers
            </button>
            <button
              className={`${styles.setting_button} ${styles.setting_theme_button} ${gameThemeStyleIcons()}`}
              onClick={() => selectTheme(GAME_THEME.ICON)}
            >
              Icon
            </button>
          </div>
        </div>
        <div className={styles.setting_box}>
          <div className={styles.setting_box_header}>Numbers of Players</div>
          <div className={styles.single_setting}>
            <button
              className={`${styles.setting_button} ${styles.setting_players_button} ${gamePlayersStyle1()}`}
              onClick={() => selectPlayers(PLAYERS_NUMBER["1"])}
            >
              1
            </button>
            <button
              className={`${styles.setting_button} ${styles.setting_players_button} ${gamePlayersStyle2()}`}
              onClick={() => selectPlayers(PLAYERS_NUMBER["2"])}
            >
              2
            </button>
            <button
              className={`${styles.setting_button} ${styles.setting_players_button} ${gamePlayersStyle3()}`}
              onClick={() => selectPlayers(PLAYERS_NUMBER["3"])}
            >
              3
            </button>
            <button
              className={`${styles.setting_button} ${styles.setting_players_button} ${gamePlayersStyle4()}`}
              onClick={() => selectPlayers(PLAYERS_NUMBER["4"])}
            >
              4
            </button>
          </div>
        </div>
        <div className={styles.setting_box}>
          <div className={styles.setting_box_header}>Grid Size</div>
          <div className={styles.single_setting}>
            <button
              className={`${styles.setting_button} ${styles.setting_grid_button} ${gameGridStyleSmall()}`}
              onClick={() => selectGridSize(GRID_SIZE.SMALL)}
            >
              4x4
            </button>
            <button
              className={`${styles.setting_button} ${styles.setting_grid_button} ${gameGridStyleBig()}`}
              onClick={() => selectGridSize(GRID_SIZE.BIG)}
            >
              6x6
            </button>
          </div>
        </div>
      </div>
      <ButtonLarge
        text="Start Game"
        color="orange"
        onClick={() => onStartGame()}
      />
    </div>
  );
}

export default InformationBoard;
