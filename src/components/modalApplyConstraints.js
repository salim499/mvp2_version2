// Import from react
import React from 'react'
import ReactDom from 'react-dom'

// Import icons 
import Order from '../assets/icons/path.svg'
import Delete from '../assets/icons/delete.svg'
import Add_relation from '../assets/icons/add_relation.svg'

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
    alignItems: 'center',
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
    alignItems: 'center'
}

const MODAL_BUTTONS = {
    display: 'flex',
    justifyContent:'space-between',
    width: '95%',
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
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
  }
const LIST_CONSTRAINTS = {
    display:'flex',
    flexDirection: 'column',
    width: '95%'
}

const LIST_CONSTRAINTS_ITEM = {
    display: 'flex',
    width: '100%',
    marginBottom: '20px'
}
const LIST_CONSTRAINTS_ITEM_FIRST = {
    width:'25%',
    height:'32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const LIST_CONSTRAINTS_ITEM_SECOND = {
    width:'50%',
    height:'32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#000000'
}
const LIST_CONSTRAINTS_ITEM_THIRD = {
    width:'25%',
    height:'32px',
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center'
}
const COMMENTS_SECTION = {
    height:'93px',
    width:'95%',
}

function ModalApplyConstraints(props) {

    // useContext
    const {navBarState} = useNavBar()

    return (
        ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES} />
        <div style={navBarState?MODAL_STYLES:MODAL_STYLES2}>
        <div style={LIST_CONSTRAINTS}>
            <div style={LIST_CONSTRAINTS_ITEM}>
                <div style={LIST_CONSTRAINTS_ITEM_FIRST}>
                    <div style={{
                        background: '#E5E5E5',
                        border: '1px solid #000000',
                        boxSizing: 'borderBox',
                        height: '18px',
                        width: '26.89px',
                    }}></div>
                    <div style={{
                       fontFamily: 'Montserrat',
                       fontStyle: 'normal',
                       fontWeight: 'normal',
                       fontSize: '18px',
                       lineHeight: '22px',                   
                       color: '#000000' 
                    }}>
                        Tobacco
                    </div>
                </div>
                <div style={LIST_CONSTRAINTS_ITEM_SECOND}>2</div>
                <div style={LIST_CONSTRAINTS_ITEM_THIRD}>
                    <img src={Order}/>
                    <img src={Delete}></img>
                </div>
            </div>
            <div style={LIST_CONSTRAINTS_ITEM}>
                <div style={LIST_CONSTRAINTS_ITEM_FIRST}>
                    <div style={{
                        background: '#E5E5E5',
                        border: '1px solid #000000',
                        boxSizing: 'borderBox',
                        height: '18px',
                        width: '26.89px',
                    }}></div>
                    <div style={{
                       fontFamily: 'Montserrat',
                       fontStyle: 'normal',
                       fontWeight: 'normal',
                       fontSize: '18px',
                       lineHeight: '22px',                   
                       color: '#000000' 
                    }}>
                        Tobacco
                    </div>
                </div>
                <div style={LIST_CONSTRAINTS_ITEM_SECOND}>M12</div>
                <div style={LIST_CONSTRAINTS_ITEM_THIRD}>
                    <img src={Add_relation}/>
                    <img src={Delete}></img>
                </div>
            </div>
        </div>
        <textarea style={COMMENTS_SECTION}>

        </textarea>
        <div style={MODAL_BUTTONS}>
              <button style={MODAL_BUTTONS_CANCEL}
              onClick={()=>props.handleHideModal()}>Cancel</button>
              <button style={MODAL_BUTTONS_CREATE}
              onClick={()=>props.handleApplyConstraints()}>Apply</button>
        </div>
        </div>
        </>,
           document.getElementById('portal')
        )
    )
}

export default ModalApplyConstraints
