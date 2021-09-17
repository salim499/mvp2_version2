// Import from react
import React, {useRef} from 'react'
import ReactDom from 'react-dom'

// Import components 
import Histogram from './histogram'

// Import icons 
import Delete from '../assets/icons/delete.svg'

// Import contexts
import { useNavBar } from "../contexts/navbar"

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
    height:'420px',
    width:'75%',
    display: 'flex',
    flexDirection:'column',
    background: '#E5E5E5',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '30px',
    marginLeft: '150.5px'
}

const MODAL_STYLES2 = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
    height:'420px',
    width:'75%',
    display: 'flex',
    flexDirection:'column',
    background: '#E5E5E5',
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
    width: '395px',
    height: '74px',
    left: '40px',
    top: '37px', 
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '37px',
    color: '#000000',
    marginTop:'34px',
    marginLeft:'40px'
}
const DATE_STYLE = {
    width: '145px',
    height: '30px',  
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '10px',
    /* or 56% */
    color: '#000000',
    marginTop:'50px',
    marginLeft:'40px',
}
const MODAL_BUTTONS = {
    display: 'flex',
    justifyContent:'space-between',
    marginTop:'30px'
}

const MODAL_BUTTONS_APPLY = {
    width: '95px',
    height: '34px',    
    background: '#081C4D',
    border: '1px solid #081C4D',
    boxSizing: 'border-box',
    color: '#FFFFFF',
    marginRight: '45px'  
  }
  const MODAL_BUTTONS_CANCEL = {
    width: '95px',
    height: '34px',    
    background: 'rgba(196, 196, 196, 1)',
    border: '1px solid #081C4D',
    boxSizing: 'border-box',
    color: '#FFFFFF',
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: '45px'     
}
const MODAL_TEXT2 = {
    width: '260px',
    height: '18px',
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#C4C4C4',
    marginTop:'18px',
    marginLeft:'100px'  
}
const IMAGE_STYLES= {
    height: '30px',
    width:'30px',
    marginLeft: '96%',
    marginTop: '10px'
}

function ModalWarning(props) {

    // useContext
    const {navBarState} = useNavBar()

    // useState 
    const dateFrom = useRef()
    const dateTo = useRef()

    return (
        ReactDom.createPortal(
            <>
            <div style={OVERLAY_STYLES} />
            <div style={navBarState?MODAL_STYLES:MODAL_STYLES2}>
                <img src={Delete} style={IMAGE_STYLES}
                onClick={props.handleHideHistogramModal}/>
               <Histogram height={'400px'} histogram={props.histogramData}/>
            </div>
            </>,
        document.getElementById('portal')
        )
    )
}

export default React.memo(ModalWarning)
