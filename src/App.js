import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import BuildingZone from "./components/BuildingZone";

function App() {
  //Create hook to store API Data
  const [allItems, setAllItems] = useState([]);

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
  }, [allItems]);

  return (
    <div>
      <h1>Index</h1>
      <hr />

      {/* 
      ###################
      Apple Park Section  
      ###################     
      */}

      <h2>Apple Park</h2>
      <ul>
        {allItems.map((item, i) => {
          if (item.buildingzone === "Apple Park") {
            return (
              <BuildingZone
                buildingNames={item.buildingname}
                link={
                  item.black === 0
                    ? "https://applefacilities.review.blueriver.com"
                    : null
                }
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <hr />

      {/* 
      ###################
       Bubbs / Results Way Section   
      ###################     
      */}

      <h2>Bubb / Results Way</h2>
      <ul>
        {allItems.map((item, i) => {
          if (item.buildingzone === "Bubb / Results Way") {
            return (
              <BuildingZone
                zoneName="Bubb / Results Way"
                buildingNames={item.buildingname}
                link={
                  item.black === 0
                    ? "https://applefacilities.review.blueriver.com"
                    : null
                }
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <hr />

      {/* 
      ###################
      Infinite Loop Section  
      ###################     
      */}

      <h2>Infinite Loop</h2>
      <ul>
        {allItems.map((item, i) => {
          if (item.buildingzone === "Infinite Loop") {
            return (
              <BuildingZone
                zoneName="Bubb / Results Way"
                buildingNames={item.buildingname}
                link={
                  item.black === 0
                    ? "https://applefacilities.review.blueriver.com"
                    : null
                }
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <hr />

      {/* 
      ###################
       Santa Clara/San Jose Section  
      ###################     
      */}
      <h2>Santa Clara/San Jose</h2>
      <ul>
        {allItems.map((item, i) => {
          if (item.buildingzone === "Santa Clara/San Jose") {
            return (
              <BuildingZone
                buildingNames={item.buildingname}
                link={
                  item.black === 0
                    ? "https://applefacilities.review.blueriver.com"
                    : null
                }
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <hr />

      {/* 
      ###################
       Sunnyvale East Section   
      ###################     
      */}

      <h2>Sunnyvale East</h2>
      <ul>
        {allItems.map((item, i) => {
          if (item.buildingzone === "Sunnyvale East") {
            return (
              <BuildingZone
                buildingNames={item.buildingname}
                link={
                  item.black === 0
                    ? "https://applefacilities.review.blueriver.com"
                    : null
                }
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <hr />

      {/* 
      ###################
       Sunnyvale West Section  
      ###################     
      */}
      <h2>Sunnyvale West</h2>
      <ul>
        {allItems.map((item, i) => {
          if (item.buildingzone === "Sunnyvale West") {
            return (
              <BuildingZone
                buildingNames={item.buildingname}
                link={
                  item.black === 0
                    ? "https://applefacilities.review.blueriver.com"
                    : null
                }
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <hr />

      {/* 
      ###################
       Other Bay Area Section 
      ###################     
      */}

      <h2>Other Bay Area</h2>
      <ul>
        {allItems.map((item, i) => {
          if (item.buildingzone === "Other Bay Area") {
            return (
              <BuildingZone
                buildingNames={item.buildingname}
                link={
                  item.black === 0
                    ? "https://applefacilities.review.blueriver.com"
                    : null
                }
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <hr />
    </div>
  );
}

export default App;
