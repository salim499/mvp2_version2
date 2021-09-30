// Import from react
import React from 'react'
import ReactDom from 'react-dom'

// Import icons 
import Warning from '../assets/icons/warning_date.svg'

// Import contexts
import { useNavBar } from "../contexts/navbar"

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
    height:'340px',
    width:'320px',
    display: 'flex',
    flexDirection:'column',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '30px',
}

const MODAL_STYLES2 = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
    height:'340px',
    width:'320px',
    display: 'flex',
    flexDirection:'column',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '30px',
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
const MODAL_BUTTON = {
    width: '87px',
    height: '25px',    
    background: '#F65656',
    borderRadius: '50px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '17px',
    /* identical to box height */
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: '117px'
}
const LOGO_DIV_STYLES = {
    width: '100%',
    height: '114px',
    backgroundColor: 'rgba(246, 86, 86, 1)',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const TITLE_STYLES = {
    marginTop: '28px',
    textAlign: 'center',
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '37px',
    /* identical to box height */
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.8)'
}
const TEXT_STYLES = {
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '28px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.4)',
    margin: '20px',
}

function ModalWarning({open, setIsOpen, onClose, chooseTargetPage}) {

    // useContext
    const {navBarState} = useNavBar()

    if(!open) return null
    return (
        ReactDom.createPortal(
            <>
            <div onClick={onClose} style={OVERLAY_STYLES} />
            <div style={navBarState?MODAL_STYLES:MODAL_STYLES2}>
            <div style={LOGO_DIV_STYLES}>
                <img src={Warning}/>
            </div>
            <div style={TITLE_STYLES}>
                Warning !
            </div>
            {chooseTargetPage ? 
            <div style={TEXT_STYLES}>
                Please choose at least one target and one prediction horizon before going forward 
            </div>
            :   
            <div style={TEXT_STYLES}>
            Your CSV should have a date column.
            </div>
        }
              <button style={MODAL_BUTTON}
              onClick={()=>setIsOpen(!open)}>Cancel</button>
            </div>
            </>,
        document.getElementById('portal')
        )
    )
}

export default ModalWarning
