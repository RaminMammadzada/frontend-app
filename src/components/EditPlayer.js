import React from "react";
import PlayerForm from "./PlayerForm";
import { useParams } from "react-router-dom";

const EditPlayer = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Edit Player with id {id} </p>
      <PlayerForm />
    </div>
  );
};
export default EditPlayer;
