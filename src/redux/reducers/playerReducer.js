import { GET_PLAYERS, EDIT_PLAYER } from "../actions/actions";

const INITIAL_STATE = {
  allPlayers: [],
  loading: false,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
  //  console.log("player reducer"  , action);

  switch (action.type) {
    case GET_PLAYERS: {
      return {
        ...state,
        allPlayers: action.players,
        loading: false,
      };
    }
    case EDIT_PLAYER: {
      return {
        ...state,
        allPlayers: [
          {
            id: action.playerId,
            name: action.player.name,
          },
          ...state.players,
        ],
        loading: false,
      };
    }
    default:
      return state;
  }
};
