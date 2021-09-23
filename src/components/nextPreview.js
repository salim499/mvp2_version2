// Import from react
import React, {useState} from 'react'

// Import from libraries
import { Link } from 'react-router-dom'

// Import css files 
import '../css/nextPreview.css'

// Import components
import SavePredictionModal from "./SavePredictionModal";

function NextPreview(props) {

  // useStates
  const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="next_preview"> 
          <button className="next_preview-preview"
          style={{visibility: props.previewVisibility}}
          onClick={()=>props.handlePreview()}>
                Previous
          </button>
          {props.text ?
          <button className={props.className ? props.className : "next_preview-next"}
          style={{visibility: props.nextVisibility}}
          onClick={()=>setIsOpen(true)}>
                 {props.text}
          </button>  
          : 
          <button className="next_preview-next"
          style={{visibility: props.nextVisibility}}
          onClick={()=>props.handleNext()}>
                 Next
          </button>  
          }
      {/* Save Prediction Modal - Popup */}
       <SavePredictionModal
        open={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        />
      </div>
    )
}

export default React.memo(NextPreview)
