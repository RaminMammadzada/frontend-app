/* eslint-disable no-console */
import axios from "axios";
import { GET_PLAYERS } from "./actions";

export const GetPlayers = () => {
  console.log("GetPlayers");

  return (dispatch) => {
    console.log("GetPlayers dispatch");

    axios.get(`http://localhost:3000/players`).then((res) => {
      dispatch({
        type: GET_PLAYERS,
        users: res.data,
      });
    });
  };
};

export const AddPlayer = (playerId, params) => {
  return (dispatch) => {
    // eslint-disable-next-line prettier/prettier
    axios.post(`http://localhost:3000/player/${playerId}`, { params }).then((response) => {
        console.log("RESPONSE IN ADD PLAYER: ", response);
        axios.get(`http://localhost:3000/players`).then((res) => {
          console.log(res);
          dispatch({
            type: GET_PLAYERS,
            users: res.data,
          });
        });
      });
  };
};
