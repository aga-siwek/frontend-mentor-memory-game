import styles from "./ButtonSmall.module.css";

function ButtonSmall({ text = "Click me", onClick = null, color = "orange" }) {
  const colorStyle = () => {
    if (color === "orange") {
      return styles.orange_color;
    } else if (color === "grey") {
      return styles.grey_color;
    }
  };

  return (
    <button
      className={`${styles.button_container} ${colorStyle()}`}
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
}

export default ButtonSmall;
