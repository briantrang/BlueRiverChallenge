import React, { useState } from "react";
import "./BuildingName.css";

const BuildingName = (props) => {
  const retrievedItems = props.buildings;

  return (
    <li className="buildingItems">
      <a href={props.link}>{retrievedItems} </a>
    </li>
  );
};

export default BuildingName;
