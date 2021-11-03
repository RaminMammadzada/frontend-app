/* eslint-disable no-console */
import axios from "axios";
import {
  GET_ALL_PLAYERS,
  GET_PLAYER,
  EDIT_PLAYER,
  DELETE_PLAYER,
} from "./actions";

export const GetAllPlayers = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3000/players`).then((res) => {
      dispatch({
        type: GET_ALL_PLAYERS,
        players: res.data,
      });
    });
  };
};

export const GetPlayer = (playerId) => {
  return (dispatch) => {
    axios.get(`http://localhost:3000/player/${playerId}`).then((res) => {
      dispatch({
        type: GET_PLAYER,
        player: res.data,
      });
    });
  };
};

export const AddPlayer = (playerId, player) => {
  return (dispatch) => {
    // eslint-disable-next-line prettier/prettier
    axios
      .post(`http://localhost:3000/player`, player)
      .then((response) => {
        axios.get(`http://localhost:3000/players`).then((res) => {
          dispatch({
            type: GET_ALL_PLAYERS,
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
    axios
      .delete(`http://localhost:3000/player/${playerId}`)
      .then(() => {
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
