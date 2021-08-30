// Import from react
import React from 'react'

// Import from libraries
import { Link } from 'react-router-dom'

// Import css files 
import '../css/nextPreview.css'

function NextPreview(props) {
    return (
      <div className="next_preview"> 
          <div className="next_preview-preview"
          style={{visibility: props.previewVisibility}}
          onClick={()=>props.handlePreview()}>
            <div className="next_preview-preview-text">
                Preview
            </div>
          </div>
          <div className="next_preview-next"
          style={{visibility: props.nextVisibility}}
          onClick={()=>props.handleNext()}>
            <div className="next_preview-next-text">
                Next
            </div>
          </div>  
      </div>
    )
}

export default React.memo(NextPreview)
