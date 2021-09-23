import React, {useState, useEffect} from "react";
import ReactDom from 'react-dom';
import axios from "axios";

const MODAL_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    backgroundColor:'white', 
    zIndex:1000,
    borderRadius:'5px',
    width:'592px'
  }
  
  const OVERLAY_STYLES={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0, 0, 0, 0.18)',
    zIndex:1000
  }
  ;

  const modelId = 123;

  const save_model_prediction =`${process.env.REACT_APP_URL_MASTER}/models`;

const SavePredictionModal = ({open, setIsOpen, onClose}) => {
  const [error, setError]=useState("");
  const[completed, setCompleted]=useState(false);
  const[predictionModelName, setPredictionModelName]=useState("");

  useEffect(()=>{
      setError("")
  }, [])

    // Endpoint to save prediction model
    const handleSavePredictionModel=async(e)=>{
        e.preventDefault();
        try{      
          const response = await axios.put(save_model_prediction+`/${modelId}`, {name:predictionModelName})
          console.log(response.data)
          if(response.data.name===predictionModelName){
              setCompleted(true)
          }else{
              setError("An error occured, the prediction model can't be saved")
          }
        }catch(error){
          setError("The prediction model can't be saved")
        }
    }

    if(!open) return null
  return ReactDom.createPortal(
      <>
      <div onClick={onClose} style={OVERLAY_STYLES}/>
    <div style={MODAL_STYLES}>
      {!completed ? 
      (
      <>
    <div style={{ backgroundColor:'#081c4d', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2 style={{paddingLeft:'10px'}}>Save Simulation</h2>
    <div className="close" style={{backgroundColor:'white'}} onClick={()=>setIsOpen(!open)}></div>
    </div>
    <p className="error">{error}</p>
      <form style={{padding:'30px 30px'}} onSubmit={handleSavePredictionModel}>
          <label className="label-form" style={{marginRight:'10px'}}>Enter Name</label>   
          <input 
          className="input-form"
            name="model prediction name" 
            type="text"
            placeholder="Prediction Model"
            required
            value={predictionModelName}
            onChange={(event)=>setPredictionModelName(event.target.value)}>
          </input>
          <div style={{display:'flex', justifyContent:'flex-end'}}>
          <button className="btn-save" type="submit">SAVE</button>
          </div>
        </form>
        </>
          )
          :(
            <div style={{ height:'100%', display:'flex', justifyContent:'center', alignItems:'center', color:'#081c4d'}}>
            <span>The has been successufly saved</span>
            </div>
          ) 
}
     </div>
     </>,
     document.getElementById('portal')
  )
}

export default SavePredictionModal;