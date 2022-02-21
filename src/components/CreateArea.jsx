import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function handelExpand() {
    setExpanded(true);
  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handelChange(event) {
    const { name, value } = event.target;

    setNote((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handelChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={handelExpand}
          onChange={handelChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        {isExpanded && <button onClick={submitNote}>Add</button>}
      </form>
    </div>
  );
}

export default CreateArea;
