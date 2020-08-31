

import React, { useState } from "react";
import './App.css';

import Form from "./components/Form";
import Boxes from "./components/Boxes";

export default function App() {
  const [boxes, setBoxes] = useState(["Box", "Box2"]);

  return (
    
    <div className = "page">
      <Form onSubmit={createBox} />
      <Boxes boxes={boxes} onClick={deleteBox} />
    </div>
  );

  function createBox(newBox) {
    setBoxes([...boxes, newBox]);
  }

  function deleteBox(boxToDelete) {
    const index = boxes.findIndex(box => box === boxToDelete);
    setBoxes([...boxes.slice(0, index), ...boxes.slice(index + 1)]);
  }
}
