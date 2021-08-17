// Import from react
import React from 'react'

// Import css files 
import '../css/nextPreview.css'

function nextPreview() {
    return (
      <div className="next_preview"> 
          <div className="next_preview-preview">
            <div className="next_preview-preview-text">
                Preview
            </div>
          </div>
          <div className="next_preview-next">
            <div className="next_preview-next-text">
                Next
            </div>
          </div>  
      </div>
    )
}

export default nextPreview
