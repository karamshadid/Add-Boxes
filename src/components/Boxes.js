import React from "react";

export default function Boxes(props) {
  return (
    <div>
      {props.boxes.map(box => (
        <div onClick={() => props.onClick(box)} className="box">
          {box}
        </div>
      ))}
    </div>
  );
}