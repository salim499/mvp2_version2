// Import from react
import React from 'react'

// Import css files
import '../css/selectDndFile.css'

// Import icons
import upload_csv from '../assets/icons/upload_csv.svg'

function selectDndFile(props) {
    return (
      <div className="first_div-csv_selection">
        <div className="first_div-csv_selection-icon">
          <img src={upload_csv}/>
        </div>
        <div className="first_div-csv_selection-text"> 
          {props.selectText} 
        </div>
        <div className="first_div-csv_selection-text2"> 
          {props.dndText}
        </div>
      </div>
    )
}

export default selectDndFile
