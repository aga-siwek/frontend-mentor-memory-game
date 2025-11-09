import styles from "./ButtonMedium.module.css";

function ButtonMedium({ text = "Click me", onClick = null, color = "orange" }) {
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

export default ButtonMedium;
