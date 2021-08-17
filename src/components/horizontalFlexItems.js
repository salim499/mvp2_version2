// Import from react
import React from 'react'

// Import css files
import '../css/horizontalFlexItems.css'

function horizontalFlexItems(props) {
    return (
        <div className="horizontal-items"> 
        {props.datasetsNames.map((datasetName) => (
            <div className="horizontal-items-item">
                {datasetName}
                <img src={props.datasetIcon}/>
            </div>           
        ))}
        </div>
    )
}

export default horizontalFlexItems
