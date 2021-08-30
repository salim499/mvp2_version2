// Import from react
import React from 'react'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants 
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

function ModalApplyConstraints() {

    // useContext
    const {navBarState} = useNavBar()

    return (
        ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES} />
        <div style={navBarState?MODAL_STYLES:MODAL_STYLES2}>
        <div style={MODAL_BUTTONS}>
              <button style={MODAL_BUTTONS_CREATE}
              onClick={()=>props.handleApplyConstraints()}>Create</button>
              <button style={MODAL_BUTTONS_CANCEL}
              onClick={()=>props.handleHideModal()}>Cancel</button>
          </div>
        </div>
        </>,
           document.getElementById('portal')
        )
    )
}

export default ModalApplyConstraints
