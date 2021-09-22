import React, {useState} from "react";
import ReactDom from 'react-dom';

import predict from "../assets/icons/predict_blue.svg";
import add from "../assets/icons/add_grey.svg";

const MODAL_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    backgroundColor:'#f5fafd', 
    padding:'40px 40px 40px 40px',
    borderRadius:'5px',
    zIndex:1000,
    width:'500px',
    height:'250px',
    maxHeight: '-webkit-fill-available',
    margin:'50px 0', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between'
   
  }
  
  const OVERLAY_STYLES={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:1000,    
  };

const PredictionHorizonModal = ({open, setIsOpen, onClose}) => {
  const [error, setError]=useState("");
  const [ newHorizon, setNewHorizon] = useState(false);

  const cancel = () => {
    setIsOpen(!open);
    }

  let horizonNb = 1;
  const addHorizon = ()=>{
    setNewHorizon(true)
    setHorizonNb(horizonNb++)
  }
    if(!open) return null
  return ReactDom.createPortal(
      <>
      <div onClick={onClose} style={OVERLAY_STYLES}/>
    <div style={MODAL_STYLES}>
      <div style={{display:'flex', alignItems:'baseline'}}>
      <div style={{fontFamily: 'Overpass',fontSize: '24px',linheight: '37px', margin:'0 20px 40px 0'}}>Please choose a prediction horizon</div>
      <img src={predict} alt="predict"/>
      </div>
      <div className="prediction-horizon-inputs">
      <div className="one-horizon">
        <div>Horizon 1</div>
          <input
          type="number"
          min="1"
          max="100"
          />
        <select>
            <option value="hours">Hours</option>
            <option value="days" selected>Days</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
        </select>
        <button onClick={addHorizon}>
          <img src={add} alt="add button"/>
        </button>
        </div>
        {newHorizon===true ? 
        <div className="one-horizon">
          <div>{horizon}</div>
          <input
          type="number"
          min="1"
          max="100"
          />
        <select>
            <option value="hours">Hours</option>
            <option value="days" selected>Days</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
        </select>
        <button onClick={addHorizon}>
          <img src={add} alt="add button"/>
        </button>
        </div>
        :
        <></>  
        }
      </div>
     <div className="popup-buttons">
         <button onClick={()=>setIsOpen(!open)}>Cancel</button>
         <button>Apply</button>
     </div>
     </div>
     </>,
     document.getElementById('portal')
  )
}

export default PredictionHorizonModal;