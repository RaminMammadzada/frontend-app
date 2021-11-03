/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Form, Button, Alert, FloatingLabel } from "react-bootstrap";
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
    <div className="player-form">
      {errorMsg && (
        <Alert key={0} variant={"danger"}>
          {errorMsg}
        </Alert>
      )}

      <Form onSubmit={handleOnSubmit} className="mt-3">
        <Form.Text className="text-muted">
          Please fill in the form and press Submit button!
        </Form.Text>
        <Form.Group controlId="name" className="my-3">
          <FloatingLabel
            controlId="floatingInput"
            label="Player Name"
            className="mb-3"
          >
            <Form.Control
              className="input-control"
              type="text"
              name="name"
              value={name}
              placeholder="Enter name of player"
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PlayerForm;
