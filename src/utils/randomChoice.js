import { GAME_THEME, GRID_SIZE } from "../store/gameSlice.js";

function RandomChoice(data) {
  console.log("data", data);
  let board;
  let randomContent;
  console.log("random board content grid size", data.gridSize);
  if (data.gridSize === GRID_SIZE.SMALL) {
    board = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];
    if (data.gameTheme === GAME_THEME.NUMBER) {
      randomContent = [
        "1",
        "1",
        "2",
        "2",
        "3",
        "3",
        "4",
        "4",
        "5",
        "5",
        "6",
        "6",
        "7",
        "7",
        "8",
        "8",
      ];
    } else if (data.gameTheme === GAME_THEME.ICON) {
      randomContent = [
        "anchor",
        "anchor",
        "bug",
        "bug",
        "car",
        "car",
        "flask",
        "flask",
        "futbol",
        "futbol",
        "hand-spork",
        "hand-spork",
        "lira-sign",
        "lira-sign",
        "moon",
        "moon",
      ];
    }
  } else if (data.gridSize === GRID_SIZE.BIG) {
    board = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];

    if (data.gameTheme === GAME_THEME.NUMBER) {
      randomContent = [
        "1",
        "1",
        "2",
        "2",
        "3",
        "3",
        "4",
        "4",
        "5",
        "5",
        "6",
        "6",
        "7",
        "7",
        "8",
        "8",
        "9",
        "9",
        "10",
        "10",
        "11",
        "11",
        "12",
        "12",
        "13",
        "13",
        "14",
        "14",
        "15",
        "15",
        "16",
        "16",
        "17",
        "17",
        "18",
        "18",
      ];
    } else if (data.gameTheme === GAME_THEME.ICON) {
      randomContent = [
        "anchor",
        "anchor",
        "bug",
        "bug",
        "book",
        "book",
        "camera",
        "camera",
        "car",
        "car",
        "cloud",
        "cloud",
        "flask",
        "flask",
        "futbol",
        "futbol",
        "hand-spork",
        "hand-spork",
        "heart",
        "heart",
        "lira-sign",
        "lira-sign",
        "lock",
        "lock",
        "map",
        "map",
        "moon",
        "moon",
        "phone",
        "phone",
        "snowflake",
        "snowflake",
        "star",
        "star",
        "sun",
        "sun",
      ];
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffled = shuffle([...randomContent]);

  let index = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      board[row][col] = shuffled[index];
      index++;
    }
  }

  console.table(board);

  return board;
}

export default RandomChoice;
