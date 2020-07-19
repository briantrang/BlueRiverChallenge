import React from "react";
import BuildingName from "./BuildingName";

const BuildingZone = (props) => {
  const currentZone = [];
  const allBuildingArray = Object.entries(props.allBuildings);

  //Sort All Buildings in alphabetical order
  allBuildingArray.sort((a, b) => {
    if (a[1].buildingname > b[1].buildingname) return 1;
    else if (a[1].buildingname < b[1].buildingname) return -1;
    else return 0;
  });

  //Match desired building zones that were passed as a prop
  allBuildingArray.forEach((item) => {
    if (props.zoneName === item[1].buildingzone) {
      currentZone.push(item);
    } else {
      return null;
    }
  });
  //Sort All Buildings in alphabetical order
  allBuildingArray.sort((a, b) => {
    if (a[1].buildingname > b[1].buildingname) return 1;
    else if (a[1].buildingname < b[1].buildingname) return -1;
    else return 0;
  });
  return (
    <section className="section">
      <h2>{props.zoneName}</h2>
      <ul>
        {currentZone.map((item, i) => {
          return (
            <BuildingName
              key={i}
              buildings={item[1].buildingname}
              link={
                item[1].black === 0
                  ? "https://applefacilities.review.blueriver.com"
                  : null
              }
            />
          );
        })}
      </ul>
      <hr class="horizontalRule"/>
    </section>
  );
};

export default BuildingZone;
