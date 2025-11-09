import {
  createListenerMiddleware,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";
import randomChoice from "../utils/randomChoice.js";

export const GAME_STATE = {
  WELCOME: "welcome",
  IN_PROGRESS: "in_progress",
  ROUND_SUMMARY: "round_summary",
  PAUSE: "pause",
};

export const GAME_THEME = {
  NUMBER: "number",
  ICON: "icon",
};

export const PLAYERS_NUMBER = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

export const ACTIVE_PLAYER = {
  PLAYER1: "PLAYER1",
  PLAYER2: "PLAYER2",
  PLAYER3: "PLAYER3",
  PLAYER4: "PLAYER4",
};

export const GRID_SIZE = {
  SMALL: "4x4",
  BIG: "6x6",
};

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameState: GAME_STATE.WELCOME,
    gameTheme: GAME_THEME.NUMBER,
    gamePlayers: PLAYERS_NUMBER["1"],
    gridSize: GRID_SIZE.SMALL,
    board: [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ],
    firstClick: { content: null, position: null },
    secondClick: { content: null, position: null },
    foundPairs: [],
    score: {
      PLAYER1: 0,
      PLAYER2: 0,
      PLAYER3: 0,
      PLAYER4: 0,
    },
    player1TimeSec: 0,
    player1Moves: 0,
    activePlayer: ACTIVE_PLAYER.PLAYER1,
    startTime: null,
  },

  reducers: {
    startGame: (state) => {
      state.gameState = GAME_STATE.IN_PROGRESS;
      state.startTime = Date.now();
      state.board = randomChoice({
        gridSize: state.gridSize,
        gameTheme: state.gameTheme,
      });
    },

    makeMove: (state, action) => {
      if (state.firstClick.content !== null) {
        state.secondClick = action.payload;
      } else if (state.firstClick.content === null) {
        state.firstClick = action.payload;
      }
    },

    nextTurn: (state) => {
      state.player1Moves += 1;
      if (
        state.firstClick.content === state.secondClick.content &&
        state.secondClick.content !== null
      ) {
        console.log("don't change player");
      } else if (state.gamePlayers === PLAYERS_NUMBER[1]) {
        state.activePlayer = ACTIVE_PLAYER.PLAYER1;
      } else if (state.gamePlayers === PLAYERS_NUMBER[2]) {
        if (state.activePlayer === ACTIVE_PLAYER.PLAYER1) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER2;
        } else if (state.activePlayer === ACTIVE_PLAYER.PLAYER2) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER1;
        }
      } else if (state.gamePlayers === PLAYERS_NUMBER[3]) {
        if (state.activePlayer === ACTIVE_PLAYER.PLAYER1) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER2;
        } else if (state.activePlayer === ACTIVE_PLAYER.PLAYER2) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER3;
        } else if (state.activePlayer === ACTIVE_PLAYER.PLAYER3) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER1;
        }
      } else if (state.gamePlayers === PLAYERS_NUMBER[4]) {
        if (state.activePlayer === ACTIVE_PLAYER.PLAYER1) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER2;
        } else if (state.activePlayer === ACTIVE_PLAYER.PLAYER2) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER3;
        } else if (state.activePlayer === ACTIVE_PLAYER.PLAYER3) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER4;
        } else if (state.activePlayer === ACTIVE_PLAYER.PLAYER4) {
          state.activePlayer = ACTIVE_PLAYER.PLAYER1;
        }
      }
      state.firstClick = { content: null, position: null };
      state.secondClick = { content: null, position: null };
    },

    finishGame: (state) => {
      state.gameState = GAME_STATE.ROUND_SUMMARY;
    },

    exitGame: (state) => {
      state.gameState = GAME_STATE.WELCOME;
      state.firstClick = { content: null, position: null };
      state.secondClick = { content: null, position: null };
      state.foundPairs = [];
      state.gridSize = GRID_SIZE.SMALL;
      state.gamePlayers = PLAYERS_NUMBER["1"];
      state.score = {
        PLAYER1: 0,
        PLAYER2: 0,
        PLAYER3: 0,
        PLAYER4: 0,
      };
      state.player1TimeSec = 0;
      state.player1Moves = 0;
      state.activePlayer = ACTIVE_PLAYER.PLAYER1;
    },

    restartGame: (state) => {
      state.board = randomChoice({
        gridSize: state.gridSize,
        gameTheme: state.gameTheme,
      });
      state.gameState = GAME_STATE.IN_PROGRESS;
      state.firstClick = { content: null, position: null };
      state.secondClick = { content: null, position: null };
      state.foundPairs = [];
      state.player1Moves = 0;
      state.score = {
        PLAYER1: 0,
        PLAYER2: 0,
        PLAYER3: 0,
        PLAYER4: 0,
      };
    },

    countTime: (state) => {
      if (state.gameState === GAME_STATE.IN_PROGRESS) {
        state.player1TimeSec += 1;
      }
    },

    addFoundPairs: (state, action) => {
      state.foundPairs = [...state.foundPairs, action.payload];
      state.score[state.activePlayer] += 1;
    },

    pauseGame: (state) => {
      state.gameState = GAME_STATE.PAUSE;
    },

    continueGame: (state) => {
      state.gameState = GAME_STATE.IN_PROGRESS;
    },

    chooseTheme: (state, action) => {
      state.gameTheme = action.payload;
    },

    choosePlayersNumber: (state, action) => {
      state.gamePlayers = action.payload;
    },

    chooseGridSize: (state, action) => {
      state.gridSize = action.payload;
      console.log("grid zise from chooseGridsieze", state.gridSize);
      if (state.gridSize === GRID_SIZE.SMALL) {
        state.board = [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
        ];
      } else if (state.gridSize === GRID_SIZE.BIG) {
        state.board = [
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ];
      }
    },
  },
});
export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(gameSlice.actions.chooseGridSize),
  effect: (action, listenerApi) => {
    const state = listenerApi.getState().game;
    listenerApi.dispatch(gameSlice.actions.changeBoardSize(state.gridSize));
  },
});

listenerMiddleware.startListening({
  matcher: isAnyOf(
    gameSlice.actions.startGame,
    gameSlice.actions.pauseGame,
    gameSlice.actions.finishGame,
  ),
  effect: (action, listenerApi) => {
    const state = listenerApi.getState().game;
    if (state.gameState === GAME_STATE.IN_PROGRESS) {
      if (state.gamePlayers === PLAYERS_NUMBER["1"]) {
        setInterval(() => listenerApi.dispatch(countTime()), 1000);
      }
    }
  },
});

listenerMiddleware.startListening({
  matcher: isAnyOf(gameSlice.actions.makeMove),
  effect: (action, listenerApi) => {
    const state = listenerApi.getState().game;
    if (
      state.firstClick.content !== null &&
      state.secondClick.content !== null
    ) {
      if (state.firstClick.content === state.secondClick.content) {
        listenerApi.dispatch(addFoundPairs(state.firstClick.content));
      }
      setTimeout(() => {
        listenerApi.dispatch(gameSlice.actions.nextTurn());
      }, 1000);
    }
  },
});

listenerMiddleware.startListening({
  matcher: isAnyOf(gameSlice.actions.addFoundPairs),
  effect: (action, listenerApi) => {
    const state = listenerApi.getState().game;
    if (state.gridSize === GRID_SIZE.SMALL) {
      if (state.foundPairs.length === 8) {
        setTimeout(listenerApi.dispatch(finishGame()), 1000);
      }
    } else if (state.gridSize === GRID_SIZE.BIG) {
      if (state.foundPairs.length === 18) {
        setTimeout(listenerApi.dispatch(finishGame()), 1000);
      }
    }
  },
});

export const {
  startGame,
  finishGame,
  exitGame,
  restartGame,
  chooseTheme,
  chooseGridSize,
  choosePlayersNumber,
  makeMove,
  pauseGame,
  countTime,
  addFoundPairs,
  continueGame,
} = gameSlice.actions;

export default gameSlice.reducer;
