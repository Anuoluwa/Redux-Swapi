import React from "react";
import './character.css'
const Character = props => {
  return <div>
  {props.character.name} <br/>
  {props.character.gender} <br/>
  {props.character.height}
  </div>;
};

export default Character;
