/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const PLAYER_NAME_MAX_LENGTH = 20;

const PlayerForm = (props) => {
  const [player, setPlayer] = useState(() => {
    return {
      name: props.player ? props.player.name : "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { name } = player;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name];
    let errorMessage = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const currentPlayer = {
        id: uuidv4(),
        name,
        date: new Date(),
      };
      props.handleOnSubmit(currentPlayer);
    } else {
      errorMessage = "Please fill out all the fields.";
    }
    setErrorMsg(errorMessage);
  };

  const handleInputChange = (event) => {
    let errorMessage;
    // eslint-disable-next-line no-shadow
    const { name, value } = event.target;
    switch (name) {
      case "name":
        if (value.length <= PLAYER_NAME_MAX_LENGTH) {
          setPlayer((prevState) => ({
            ...prevState,
            [name]: value,
          }));
          errorMessage = "";
          setErrorMsg(errorMessage);
        } else {
          errorMessage =
            "Player name length cannot be larger than 20 characters!";
          setErrorMsg(errorMessage);
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
      {errorMsg && <p className="errorMessage">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Player Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
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
