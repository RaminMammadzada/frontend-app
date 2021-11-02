import { GET_PLAYERS } from "../actions/actions";

const INITIAL_STATE = {
  Players: [],
  loading: false,
};

export default (action, state = INITIAL_STATE) => {
  //  console.log("player reducer"  , action);

  switch (action.type) {
    case GET_PLAYERS: {
      return {
        ...state,
        Players: action.players,
        loading: false,
      };
    }
    default:
      return state;
  }
};
