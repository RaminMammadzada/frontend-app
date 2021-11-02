import React from "react";
import PlayerForm from "./PlayerForm";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EditPlayer = ({ history, players, setPlayers }) => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const playerToEdit = players.find((player) => player.id === id);

  const handleOnSubmit = (player) => {
    // eslint-disable-next-line react/prop-types
    const filteredPlayers = players.filter((plyr) => plyr.id !== id);
    setPlayers([player, ...filteredPlayers]);
    // eslint-disable-next-line react/prop-types
    history.push("/");
  };

  return (
    <div>
      <p>Edit Player with id {id} </p>
      <PlayerForm player={playerToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};
export default EditPlayer;
