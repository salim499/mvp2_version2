import React from 'react'

// Import css files 
import '../css/dataSetContainer.css'

function DataSetContainer() {
    return (
      <div className="dataset_set_container">
        <div className="dataset_name_container">
            <div className="dataset_name_container-text">
            Datasets / <span style={{color:"gray"}}>scalnyx.csv</span>
            </div>
        </div>
      </div>
    )
}

export default DataSetContainer
