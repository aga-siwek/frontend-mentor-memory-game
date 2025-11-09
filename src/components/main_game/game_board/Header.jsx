import styles from "./Header.module.css";
import LogoDark from "../../common/logo/LogoDark.jsx";
import ButtonSmall from "../../common/buttons/ButtonSmall.jsx";

function Header({ onPauseGame, onRestartGame, onNewGame }) {
  return (
    <div className={styles.game_header_container}>
      <LogoDark />
        <div className={styles.game_button_mobile}>
      <ButtonSmall text="menu" color="orange" onClick={() => onPauseGame()} />
        </div>
        <div className={styles.game_buttons_other_dev}>
            <ButtonSmall text="Restart" color="orange" onClick={() => onRestartGame()} />
            <ButtonSmall text="New Game" color="grey" onClick={() => onNewGame()} />
        </div>
    </div>
  );
}

export default Header;
