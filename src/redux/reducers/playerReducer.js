import {
  GET_ALL_PLAYERS,
  GET_PLAYER,
  EDIT_PLAYER,
  DELETE_PLAYER,
} from "../actions/actions";

const INITIAL_STATE = {
  allPlayers: [],
  loading: false,
  currentPlayer: null,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS: {
      return {
        ...state,
        allPlayers: action.players,
        loading: false,
      };
    }
    case GET_PLAYER: {
      return {
        ...state,
        currentPlayer: action.player,
      };
    }
    case EDIT_PLAYER: {
      return {
        ...state,
        allPlayers: [
          ...state.allPlayers,
          {
            id: action.playerId,
            name: action.player.name,
          },
        ],
        loading: false,
      };
    }
    case DELETE_PLAYER: {
      return {
        ...state,
        allPlayers: state.allPlayers.filter(
          (plyr) => plyr.id !== action.playerId
        ),
        loading: false,
      };
    }
    default:
      return state;
  }
};
