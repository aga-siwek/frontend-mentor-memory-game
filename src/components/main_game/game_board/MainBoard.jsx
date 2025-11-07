import styles from "./MainBoard.module.css";
import MainBoardFile from "./MainBoardFile.jsx";
import { GRID_SIZE, makeMove } from "../../../store/gameSlice.js";

function MainBoard({
  board,
  gridSize,
  foundPairs,
  firstClick,
  secondClick,
  onMakeMove,
}) {
  const containerStyle = () => {
    if (gridSize === GRID_SIZE.SMALL) {
      return styles.main_board_container_small;
    } else if (gridSize === GRID_SIZE.BIG) {
      return styles.main_board_container_big;
    }
  };

  return (
    <div className={`${containerStyle()}`}>
      {board.map((row, rowIndex) =>
        row.map((column, colIndex) => (
          <MainBoardFile
            onClick={() =>
              onMakeMove({
                content: column,
                position: `${rowIndex}-${colIndex}`,
              })
            }
            key={`${rowIndex}-${colIndex}`}
            board={row}
            content={column}
            gridSize={gridSize}
            isFound={foundPairs.includes(column)}
            isClicked={
              (column === firstClick.content &&
                `${rowIndex}-${colIndex}` === firstClick.position) ||
              (column === secondClick.content &&
                `${rowIndex}-${colIndex}` === secondClick.position)
            }
            isClickedAndFound={
              column === firstClick.content &&
              column === secondClick.content &&
              firstClick.content !== null
            }
            isEndRound={
              firstClick.content !== null && secondClick.content !== null
            }
          />
        )),
      )}
    </div>
  );
}

export default MainBoard;
