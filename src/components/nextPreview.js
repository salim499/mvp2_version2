// Import from react
import React, {useState, useCallback} from 'react'

// Import css files 
import '../css/nextPreview.css'

// Import components
import SavePredictionModal from "./SavePredictionModal";
import ModalWarning from './modalWarning'

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
          props.warning === true ? 
          <button className="next_preview-next"
          style={{visibility: props.nextVisibility}}
          onClick={()=>setIsOpen(!isOpen)}>
                 Next
                 {console.log("true")}
          </button> 
          :
          <button className="next_preview-next"
          style={{visibility: props.nextVisibility}}
          onClick={()=>props.handleNext()}>
                 Next
                 {console.log("false")}
          </button>  
          }
      {/* Save Prediction Modal - Popup */}
       <SavePredictionModal
          open={isOpen}
          setIsOpen={setIsOpen}
          onClose={() => setIsOpen(false)}
        />
      {/* Warning Modal - Popup */}
      <ModalWarning
        open={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        chooseTargetPage="chooseTargetPage"
      />
      </div>
    )
}

export default React.memo(NextPreview)
