import React from "react";
import PlayerForm from "./PlayerForm";

// eslint-disable-next-line react/prop-types
const AddPlayer = ({ history, players, setPlayers }) => {
  const handleOnSubmit = (player) => {
    setPlayers([player, ...players]);
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
