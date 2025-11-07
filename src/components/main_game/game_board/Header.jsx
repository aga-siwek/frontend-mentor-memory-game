import styles from "./Header.module.css";
import LogoDark from "../../common/logo/LogoDark.jsx";
import ButtonSmall from "../../common/buttons/ButtonSmall.jsx";

function Header({ onClick }) {
  return (
    <div className={styles.game_header_container}>
      <LogoDark />
      <ButtonSmall text="menu" color="orange" onClick={() => onClick()} />
    </div>
  );
}

export default Header;
