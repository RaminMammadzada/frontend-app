import { combineReducers } from "redux";
import PlayerReducer from "./playerReducer";

const rootReducer = combineReducers({
  players: PlayerReducer,
});
export default rootReducer;
