// Import from react
import React, {useRef} from 'react'
import ReactDom from 'react-dom'

// Import contexts
import { useNavBar } from "../contexts/navbar"

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    height:'407px',
    width:'485px',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    marginLeft: '150.5px'
  }

  const MODAL_STYLES2 = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    height:'407px',
    width:'485px',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-around',
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
  }

  const MODAL_TITLE = {
    fontFamily: "Overpass",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "37px",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    fontFeatureSettings: "tnum on, lnum on",   
    color: "#000000",
  }

  const MODAL_INPUT = {
    width: '248px',
    height: '42px',  
    background: '#E5E5E5',
    borderRadius: '5px'
  }
  const MODAL_INPUT_CONTAINER = {
      display: 'flex',
  }
  const MODAL_INPUT_LABEL = {
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '28px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    fontFeatureSettings: 'tnum on, lnum on',   
    color: '#000000'
  }
  const MODAL_BUTTONS = {
    display: 'flex',
    justifyContent:'space-between'
  }
  const MODAL_BUTTONS_CREATE = {
    width: '112px',
    height: '52.14px',  
    background: '#2EC4B6',
    border: '2px solid #2EC4B6',
    boxSizing: 'border-box',
    borderRadius: '2px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '10px',
    /* identical to box height, or 56% */
    textAlign: 'center',
    color: '#FFFFFF'
  }
  const MODAL_BUTTONS_CANCEL = {
    width: '112px',
    height: '52.14px',  
    background: '#C4C4CC',
    border: '2px solid #C4C4CC',
    boxSizing: 'border-box',
    borderRadius: '2px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '10px',
    /* identical to box height, or 56% */
    textAlign: 'center',
    color: '#FFFFFF'     
}

function ModalNewItem(props) {

    // useContext
    const {navBarState} = useNavBar()

    // useRef
    const itemNameRef = useRef()

    return (
 ReactDom.createPortal(
            <>
     <div style={OVERLAY_STYLES} />
      <div style={navBarState?MODAL_STYLES:MODAL_STYLES2}>
          <div style={MODAL_TITLE}>
              {props.typeItem}
          </div>
          <div style={MODAL_INPUT_CONTAINER}>
              <label style={MODAL_INPUT_LABEL}>Name&nbsp;&nbsp;</label>
              <input type="text" ref={itemNameRef} style={MODAL_INPUT}/>
          </div>
          <div style={MODAL_BUTTONS}>
              <button style={MODAL_BUTTONS_CREATE}
              onClick={()=>props.handleCreateItem(itemNameRef.current.value)}>Create</button>
              <button style={MODAL_BUTTONS_CANCEL}
              onClick={()=>props.handleHideModal()}>Cancel</button>
          </div>
      </div>
            </>,
           document.getElementById('portal')
        )
    )
}

export default React.memo(ModalNewItem)
