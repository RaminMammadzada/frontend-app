import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Player = ({ id, playerName, date, handleRemoveBook }) => {
  const history = useHistory();
  return (
    <Card style={{ width: "18rem" }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{playerName}</Card.Title>
        <div className="book-details">
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Player;
