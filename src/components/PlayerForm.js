/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const PlayerForm = (props) => {
  const [player, setPlayer] = useState(() => {
    return {
      playerName: props.player ? props.player.playerName : "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { playerName } = player;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [playerName];
    let errorMessage = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const currentPlayer = {
        id: uuidv4(),
        playerName,
        date: new Date(),
      };
      props.handleOnSubmit(currentPlayer);
    } else {
      errorMessage = "Please fill out all the fields.";
    }
    setErrorMsg(errorMessage);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value, 10) === Number(value)) {
          setPlayer((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        // eslint-disable-next-line prefer-named-capture-group
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setPlayer((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setPlayer((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Player Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="playerName"
            value={playerName}
            placeholder="Enter name of player"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PlayerForm;
