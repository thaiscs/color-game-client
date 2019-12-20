import React from "react";

const header = props => (
  <div className="Header">
    <h3>The great</h3>
    <h2>{`RGB(${props.color.red}, ${props.color.green}, ${props.color.blue})`}</h2>
    <h3>Color game</h3>
    <div>Status: {props.status}</div>
    <div>Points: {props.points}</div>
    <div className="stripe">
      <button onClick={props.startGame}>New game</button>
    </div>
  </div>
);

export default header;
