// Import from react
import React from 'react'

// Import from libraries
import { useHistory } from 'react-router-dom'

// Import components
import Timeline from '../components/Timeline'
import NextPreview from '../components/nextPreview'

// Import Icons
import predict from '../assets/icons/predict.svg'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// constants
const timelineLevel=3



const ChooseTarget = () => {
  // useHistory
  const history = useHistory();

  // useContext
  const {navBarState} = useNavBar();

  const handleNext =()=>{
    history.push({
        pathname : '/predict'
    })      
  } 


    return (
        <>
      <div className={navBarState?"container-with-margin ":"container-without-margin"}>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="choose-target-container">
        <div className="edit-model-container">
          <div><span>datasets/</span><span>"dataset.name"</span></div>
        </div>
        <div className="edit-model-container">
          <div className="section-title">
          <div>Choose Targets</div>
          <div className="info">Drag the factors you want us to consider as “target” into the column Targets*</div>
          </div>
          <div className="section-boxes">
            <div className="factors-box">
              <div className="title">
                All Factors
              </div>
              <div className="tags">
                <div className="tag-box">
                  <div>Factor1</div>
                </div>
                <div className="tag-box">
                  <div>Factor2</div>
                </div>
                <div className="tag-box">
                  <div>Factor3</div>
                </div>
                <div className="tag-box">
                  <div>Factor3</div>
                </div>
                <div className="tag-box">
                  <div>Factor3</div>
                </div>
                <div className="tag-box">
                  <div>Factor3</div>
                </div>
                <div className="tag-box">
                  <div>Factor3</div>
                </div>
                <div className="tag-box">
                  <div>Factor3</div>
                </div>
                <div className="tag-box">
                  <div>Factor3</div>
                </div>
                <div className="tag-box">
                  <div>Factor3</div>
                </div>
              </div>
            </div>
            <div className="targets-box">
            <div className="title">
                Targets
              </div>
            </div>
          </div>
        </div>
        <div className="edit-model-container">
        <div className="section-title" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>Prediction Horizon</div>
          <button style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>Choose Prediction Horizon</div>
            <img src={predict} alt="predict icon"/>
          </button>
        </div>
        <div className="targets-observation-graph">
          TARGETS OBSERVATION GRAPH
        </div>
        </div>
       </div>
       <NextPreview 
        handleNext={handleNext}
        />
       </div>
    </>
    )
}

export default ChooseTarget;