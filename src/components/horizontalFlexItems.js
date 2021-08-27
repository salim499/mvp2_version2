// Import from react
import React from 'react'

// Import css files
import '../css/horizontalFlexItems.css'

function HorizontalFlexItems(props) {
    return (
        console.log('horizontalFlexItems'),
        <div className="horizontal-items"> 
          {props.datasets.map((dataset,index) => (
            <div className="horizontal-items-item" key={dataset.id}
            onClick={()=>props.handleChoseDataset(dataset.id)}>
              <div className="horizontal-items-item-title">
              {dataset.name}
              </div>
              <img src={props.datasetIcon} />
            </div>           
          ))}
        </div>
    )
}

export default React.memo(HorizontalFlexItems)
