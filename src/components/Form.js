import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [newBox, setNewBox] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={event => setNewBox(event.target.value)}
        type="text"
        name="boxName"
        value={newBox}
      />
      <button>ADD BOX</button>
    </form>
  );
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(newBox);
    setNewBox("");
  }
}
