import React, { useEffect } from "react";
import _ from "lodash";
import Player from "./Player";
import { useDispatch, useSelector } from "react-redux";
import {
  DeletePlayer as deletePlayer,
  GetAllPlayers as getAllPlayers,
} from "../redux/actions/playerActions";

// eslint-disable-next-line react/prop-types
const PlayersList = () => {
  const players = useSelector((state) => state.players.allPlayers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlayers());
  }, []);

  const handleRemovePlayer = (id) => {
    console.log(`User with id: ${id} is about to be deleted.`);
    // eslint-disable-next-line react/prop-types
    // setPlayers(players.filter((player) => player.id !== id));
    dispatch(deletePlayer(id));
  };

  // eslint-disable-next-line no-console
  console.log("players: ", players);

  return (
    <React.Fragment>
      <div className="player-list">
        {!_.isEmpty(players) ? (
          // eslint-disable-next-line react/prop-types
          players.map((player) => (
            <Player
              key={player.id}
              {...player}
              handleRemovePlayer={handleRemovePlayer}
            />
          ))
        ) : (
          <p className="message">No players added yet.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default PlayersList;
