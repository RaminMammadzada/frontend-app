/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetPlayer as getPlayer } from "../redux/actions/playerActions";

// eslint-disable-next-line react/prop-types
const PlayerDetails = ({ history }) => {
  const { id } = useParams();

  const currentPlayer = useSelector((state) => state.players.currentPlayer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayer(id));
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "25rem" }} className="book">
        <Card.Body>
          <Card.Title
            onClick={() => history.push(`/player/${id}`)}
            className="book-title"
          >
            {currentPlayer.name}
          </Card.Title>
          <Card.Text
            onClick={() => history.push(`/player/${id}`)}
            className="book-title"
          >
            Current player id: {currentPlayer.id}
          </Card.Text>
          <Card.Text
            onClick={() => history.push(`/player/${id}`)}
            className="book-title"
          >
            Player name: {currentPlayer.name}
          </Card.Text>
          <Button variant="primary" onClick={() => history.push(`/players`)}>
            Go back to players list
          </Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerDetails;
