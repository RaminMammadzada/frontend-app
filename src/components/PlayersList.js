/* eslint-disable no-magic-numbers */
import React, { useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  DeletePlayer as deletePlayer,
  GetAllPlayers as getAllPlayers,
} from "../redux/actions/playerActions";
import { Table } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const PlayersList = ({ history }) => {
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
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Player Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!_.isEmpty(players) ? (
            // eslint-disable-next-line react/prop-types
            players.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{`${player.id.slice(0, 7)}.....${player.id.slice(-4)}`}</td>
                <td>{player.name}</td>
                <td>
                  <Button
                    className="btn-success"
                    // eslint-disable-next-line react/prop-types
                    onClick={() => history.push(`/player/${player.id}`)}
                  >
                    <FontAwesomeIcon className="text-white" icon={faEye} />
                  </Button>{" "}
                  <Button
                    className="btn-primary"
                    // eslint-disable-next-line react/prop-types
                    onClick={() => history.push(`/edit/${player.id}`)}
                  >
                    <FontAwesomeIcon className="text-white" icon={faEdit} />
                  </Button>{" "}
                  <Button
                    className="btn-danger"
                    onClick={() => handleRemovePlayer(player.id)}
                  >
                    <FontAwesomeIcon className="text-white" icon={faTrashAlt} />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <p className="message">No players added yet.</p>
          )}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default PlayersList;
