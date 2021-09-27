// Import from react
import React, {useState} from 'react'

// Import css files
import '../css/horizontalFlexItems.css'

function HorizontalFlexItems(props) {

    // useState 
    const [chosenDatasetId, setChosenDatasetId] = useState(null)

    // functions
    const handleChoseDataset = (id) => {
      setChosenDatasetId(id)
      props.handleChoseDataset(id)
    }

    return (
        <div className="horizontal-items"> 
          {props.datasets.map((dataset,index) => (
            <div className="horizontal-items-item" key={dataset.id}
            style={{color:dataset.id===chosenDatasetId&&"#081c4d"}}
            onClick={()=>handleChoseDataset(dataset.id)}>
              <img src={props.datasetIcon} />
              <div className="horizontal-items-item-title">            
              {dataset.name}
              </div>
            </div>           
          ))}
        </div>
    )
}

export default React.memo(HorizontalFlexItems)
