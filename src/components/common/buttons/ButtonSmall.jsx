import styles from "./ButtonSmall.module.css";

function ButtonSmall({ text = "Click me", onClick = null, color = "orange" }) {
  return (
    <button className={styles.button_container} onClick={(e) => onClick(e)}>
      {text}
    </button>
  );
}

export default ButtonSmall;
