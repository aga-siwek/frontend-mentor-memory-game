import styles from "./MainBoardFile.module.css";
import anchorIcon from "../../../assets/anchor.svg";
import bookIcon from "../../../assets/book.svg";
import bugIcon from "../../../assets/bug.svg";
import cameraIcon from "../../../assets/camera.svg";
import carIcon from "../../../assets/car.svg";
import cloudIcon from "../../../assets/cloud.svg";
import flaskIcon from "../../../assets/book.svg";
import futbolIcon from "../../../assets/futbol.svg";
import handSporkIcon from "../../../assets/hand-spork.svg";
import heartIcon from "../../../assets/heart.svg";
import liraSignIcon from "../../../assets/lira-sign.svg";
import lockIcon from "../../../assets/lock.svg";
import mapIcon from "../../../assets/map.svg";
import moonIcon from "../../../assets/moon.svg";
import phoneIcon from "../../../assets/phone.svg";
import snowflakeIcon from "../../../assets/snowflake.svg";
import starIcon from "../../../assets/star.svg";
import sunIcon from "../../../assets/sun.svg";
import { ReactSVG } from "react-svg";
import { GRID_SIZE } from "../../../store/gameSlice.js";

function MainBoardFile({
  content,
  gridSize,
  isFound,
  isClicked,
  isClickedAndFound,
  onClick,
  isEndRound,
}) {
  const isClickedAndFoundStyle = () => {
    if (isClickedAndFound) {
      return styles.is_clicked_and_found;
    }
    return styles.is_not_clicked_and_found;
  };
  const isClickedStyle = () => {
    if (isClicked) {
      return styles.is_clicked;
    }
    return styles.is_not_clicked;
  };

  const isClickedContentStyle = () => {
    if (isClicked) {
      return styles.content_is_clicked;
    }
    return styles.content_is_not_clicked;
  };

  const isFoundStyle = () => {
    if (isFound) {
      return styles.is_found;
    }
    return styles.is_not_found;
  };

  const isFoundContentStyle = () => {
    if (isFound) {
      return styles.content_is_found;
    }
    return styles.content_is_not_found;
  };

  const fileStyle = () => {
    if (gridSize === GRID_SIZE.SMALL) {
      return styles.main_board_file_container_small;
    } else if (gridSize === GRID_SIZE.BIG) {
      return styles.main_board_file_container_big;
    }
  };

  const contentStyle = () => {
    if (gridSize === GRID_SIZE.SMALL) {
      return styles.main_board_file_content_small;
    } else if (gridSize === GRID_SIZE.BIG) {
      return styles.main_board_file_content_big;
    }
  };

  const iconStyle = () => {
    if (gridSize === GRID_SIZE.SMALL) {
      return styles.icon_svg_small;
    } else if (gridSize === GRID_SIZE.BIG) {
      return styles.icon_svg_big;
    }
  };

  const showContent = () => {
    switch (content) {
      case "anchor":
        return (
          <ReactSVG
            src={anchorIcon}
            alt="anchor icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "bug":
        return (
          <ReactSVG
            src={bugIcon}
            alt="bug icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "book":
        return (
          <ReactSVG
            src={bookIcon}
            alt="book icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "camera":
        return (
          <ReactSVG
            src={cameraIcon}
            alt="camera icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "car":
        return (
          <ReactSVG
            src={carIcon}
            alt="car icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "cloud":
        return (
          <ReactSVG
            src={cloudIcon}
            alt="cloud icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "flask":
        return (
          <ReactSVG
            src={flaskIcon}
            alt="flask icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "futbol":
        return (
          <ReactSVG
            src={futbolIcon}
            alt="futbol icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "hand-spork":
        return (
          <ReactSVG
            src={handSporkIcon}
            alt="hand icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "heart":
        return (
          <ReactSVG
            src={heartIcon}
            alt="heart icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "lira-sign":
        return (
          <ReactSVG
            src={liraSignIcon}
            alt="lira icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "lock":
        return (
          <ReactSVG
            src={lockIcon}
            alt="lock icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "map":
        return (
          <ReactSVG
            src={mapIcon}
            alt="map icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "moon":
        return (
          <ReactSVG
            src={moonIcon}
            alt="moon icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "phone":
        return (
          <ReactSVG
            src={phoneIcon}
            alt="phone icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "snowflake":
        return (
          <ReactSVG
            src={snowflakeIcon}
            alt="snowflake icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "star":
        return (
          <ReactSVG
            src={starIcon}
            alt="star icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      case "sun":
        return (
          <ReactSVG
            src={sunIcon}
            alt="sun icon"
            className={`${styles.icon_svg} ${iconStyle()} ${isFoundContentStyle()} ${isClickedContentStyle()}`}
          />
        );
      default:
        return (
          <p className={`${isFoundContentStyle()} ${isClickedContentStyle()}`}>
            {content}
          </p>
        );
    }
  };

  return (
    <button
      className={`${styles.main_board_file_container} ${fileStyle()} ${isFoundStyle()} ${isClickedStyle()} ${isClickedAndFoundStyle()}`}
      onClick={(e) => onClick(e)}
      disabled={isFound || isClicked || isEndRound}
    >
      <div className={`${contentStyle()}`}>{showContent()}</div>
    </button>
  );
}

export default MainBoardFile;
