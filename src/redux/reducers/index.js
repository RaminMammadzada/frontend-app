import { combineReducers } from "redux";
import PlayerReducer from "./playerReducer";

const rootReducer = combineReducers({
  player: PlayerReducer,
});
export default rootReducer;
