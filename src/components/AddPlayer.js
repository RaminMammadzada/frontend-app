import React from "react";
import PlayerForm from "./forms/PlayerForm";
import { AddPlayer as addPlayer } from "../redux/actions/playerActions";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const AddPlayer = ({ history }) => {
  const dispatch = useDispatch();

  const handleOnSubmit = (player) => {
    dispatch(addPlayer(player.id, { name: player.name }));
    // eslint-disable-next-line react/prop-types
    history.push("/");
  };

  return (
    <React.Fragment>
      <PlayerForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddPlayer;
