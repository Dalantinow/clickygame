import React from "react";
import "./style.css";


function PlanetPic(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.addScore(props.id)} alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlanetPic;
