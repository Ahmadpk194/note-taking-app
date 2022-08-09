import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";

function Note({ title, content, onDelete, id, date }) {
  return (
    <div className="note">
      <h1> {title} </h1>
      <p> {content} </p>
      <small className="date"> Added : {date} </small>
      <Button variant="outlined" onClick={() => onDelete(id)}>
        <DeleteForeverIcon />
      </Button>
    </div>
  );
}

export default Note;
