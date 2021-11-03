import React from "react";
import PlayerForm from "./forms/PlayerForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditPlayer as editPlayer } from "../redux/actions/playerActions";

// eslint-disable-next-line react/prop-types
const EditPlayer = ({ history }) => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const dispatch = useDispatch();

  const players = useSelector((state) => state.players.allPlayers);
  const playerToEdit = players.find((player) => player.id === id);

  const handleOnSubmit = (player) => {
    // eslint-disable-next-line react/prop-types
    dispatch(editPlayer(id, { name: player.name }));
    // eslint-disable-next-line react/prop-types
    history.push("/");
  };

  return (
    <div>
      <PlayerForm player={playerToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};
export default EditPlayer;
