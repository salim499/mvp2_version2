// Import from react
import React from 'react'

// Import from libraries
import { Link } from 'react-router-dom'

// Import css files 
import '../css/nextPreview.css'

function NextPreview(props) {
    return (
      <div className="next_preview"> 
          <button className="next_preview-preview"
          style={{visibility: props.previewVisibility}}
          onClick={()=>props.handlePreview()}>
                Previous
          </button>
          <button className="next_preview-next"
          style={{visibility: props.nextVisibility}}
          onClick={()=>props.handleNext()}>
                Next
          </button>  
      </div>
    )
}

export default React.memo(NextPreview)
