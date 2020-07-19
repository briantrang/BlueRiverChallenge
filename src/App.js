import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import BuildingZone from "./components/BuildingZone";

function App() {
  //Create hook to store API Data
  const [allItems, setAllItems] = useState([]);
  const [buildingZones, setBuildingZones] = useState([]);

  //Grab API Data
  useEffect(() => {
    axios
      .get(
        "https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600"
      )
      .then((response) => {
        //store data into allItems
        setAllItems(response.data.data.items);
      })
      .catch((error) => {
        //log any errors
        console.log(error);
      });
  }, []);

  //Sort the data in alphabetical order by their building zone except for Other Bay Area, display that last
  allItems.sort((a, b) => {
    if (a.buildingzone === "Other Bay Area") return 1;
    else if (b.buildingzone === "Other Bay Area") return -1;
    else if (a.buildingzone > b.buildingzone) return 1;
    else if (a.buildingzone < b.buildingzone) return -1;
    else return 0;
  });

  //Make copy of allItems and store in buildingZone
  let buildingZone = [];

  allItems.map((item, i) => {
    return (buildingZone[i] = item.buildingzone);
  });

  //Remove all duplicate building zones
  let uniqueBuildingZone = new Set(buildingZone);

  //Store all unique building zones into new array
  let uniqueBuildingArray = [];
  uniqueBuildingZone.forEach((item) => {
    uniqueBuildingArray.push(item);
  });

  //Remove all array elements that are empty
  uniqueBuildingArray.splice(uniqueBuildingArray.indexOf(""), 1);

  return (
    <div>
      <h1>Index</h1>
      <hr />

      {/* Display all buildings and their respective building names in alphabetical order */}

      {uniqueBuildingArray.map((item, i) => {
        return <BuildingZone zoneName={item} allBuildings={allItems} />;
      })}
    </div>
  );
}

export default App;
