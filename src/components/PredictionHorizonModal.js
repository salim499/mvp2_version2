import React, {useState} from "react";
import ReactDom from 'react-dom';

import Horizon from "../components/Horizon.js";

import add from "../assets/icons/add_grey.svg";
import predict from "../assets/icons/predict_blue.svg";


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

const PredictionHorizonModal = ({open, setIsOpen, onClose, horizons, setHorizons, setHorizonsSummary, setEditMode}) => {
  const [error, setError]=useState("");

  const cancel = () => {
    setIsOpen(!open);
    }

  const addHorizon = ()=>{
    if(horizons.length <3){
      setHorizons([...horizons, {duration:"1", timeUnit:"days"}])  
    }  
  }

  const changeHorizon =(index, horizon)=>{
    const newHorizons = [...horizons]
    newHorizons[index]=horizon
    setHorizons(newHorizons)
  }

  const handleSubmit=(event)=>{
    event.preventDefault(); 
    setIsOpen(!open)
    setHorizonsSummary(true);
    setEditMode(true)
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
      <form onSubmit={handleSubmit}>
      <div className="prediction-horizon-inputs">
        {horizons.map((horizon, index)=>{
          return(
            <>
            <Horizon 
            horizon={horizon}
            index={index}
            changeHorizon={changeHorizon}
            />
            {horizons.length <3 && index===horizons.length-1 &&
              <button onClick={addHorizon}>
              <img src={add} alt="add button"/>
              </button>
              }
            </>
          )
        })}
      </div>
     <div className="popup-buttons">
         <button onClick={()=>setIsOpen(!open)}>Cancel</button>
         <button type="submit">Confirm</button>
     </div>
     </form>
     </div>
     </>,
     document.getElementById('portal')
  )
}

export default PredictionHorizonModal;