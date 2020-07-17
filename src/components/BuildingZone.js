import React, { useState } from 'react'
import './BuildingZone.css'

const BuildingZone = props => {


const retrievedItems = props.buildingNames;
    return(
        
        <li className="buildingItems" >
            <a href={props.link}>{retrievedItems} </a>
        </li>
    )

}

export default BuildingZone;