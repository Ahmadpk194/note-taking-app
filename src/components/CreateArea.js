import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea({ onAdd, addDate }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleExpanded = () => {
    setIsExpanded(true);
  };

  const btnSubmitHandler = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    addDate(`${date} ${time}`);
  };

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            type="text"
            value={note.title}
            onChange={changeHandler}
            placeholder="Title"
            name="title"
          />
        )}
        <textarea
          value={note.content}
          onClick={handleExpanded}
          onChange={changeHandler}
          rows={isExpanded ? 3 : 1}
          name="content"
          placeholder="Write your note here..."
        ></textarea>
        <button onClick={btnSubmitHandler}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
