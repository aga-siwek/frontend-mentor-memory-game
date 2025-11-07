import styles from "./Menu.module.css";
import ButtonLarge from "../../common/buttons/ButtonLarge.jsx";
function Menu({ onRestartGame, onNewGame, onResumeGame, onContinueGame }) {
  return (
    <div className={styles.menu_background}>
      <div className={styles.menu_container}>
        <ButtonLarge
          text="Restart"
          color="orange"
          onClick={() => onRestartGame()}
        />
        <ButtonLarge text="New Game" color="grey" onClick={() => onNewGame()} />
        <ButtonLarge
          text="Resume Game"
          color="grey"
          onClick={() => onResumeGame()}
        />
        <ButtonLarge
          text="Continue Game"
          color="grey"
          onClick={() => onContinueGame()}
        />
      </div>
    </div>
  );
}

export default Menu;
