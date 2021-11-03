/* eslint-disable no-console */
import axios from "axios";
import { GET_PLAYERS, EDIT_PLAYER, DELETE_PLAYER } from "./actions";

export const GetAllPlayers = () => {
  console.log("GetAllPlayers");

  return (dispatch) => {
    console.log("GetPlayers dispatch");

    axios.get(`http://localhost:3000/players`).then((res) => {
      console.log("I am here: ", res);
      dispatch({
        type: GET_PLAYERS,
        players: res.data,
      });
    });
  };
};

export const AddPlayer = (playerId, player) => {
  return (dispatch) => {
    console.log("playerId and params: ", [playerId, player]);
    // eslint-disable-next-line prettier/prettier
    axios.post(`http://localhost:3000/player`, player).then((response) => {
        console.log("RESPONSE IN ADD PLAYER: ", response);
        axios.get(`http://localhost:3000/players`).then((res) => {
          console.log(res);
          dispatch({
            type: GET_PLAYERS,
            players: res.data,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const EditPlayer = (playerId, player) => {
  return (dispatch) => {
    console.log("playerId and params: ", [playerId, player]);
    // eslint-disable-next-line prettier/prettier
    axios.put(`http://localhost:3000/player/${playerId}`, player).then(() => {
      dispatch({
        type: EDIT_PLAYER,
        player,
        playerId,
      });
    });
  };
};

export const DeletePlayer = (playerId) => {
  return (dispatch) => {
    // eslint-disable-next-line prettier/prettier
    axios.delete(`http://localhost:3000/player/${playerId}`).then(() => {
        dispatch({
          type: DELETE_PLAYER,
          playerId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
