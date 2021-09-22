// Import from react
import React, {useState, useCallback, useEffect} from 'react'

// Import from libraries
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import { useHistory, useLocation } from 'react-router-dom'
import { get } from 'axios'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Import components
import GraphTarget from '../components/testChart2'
import PredictionHorizonModal from '../components/PredictionHorizonModal';
import Timeline from '../components/timeline'
import NextPreview from '../components/nextPreview'
// Import Icons
import predict from '../assets/icons/predict.svg'

const timelineLevel=3

const ChooseTarget = () => {


  // useHistory
  const history = useHistory()

  // useLocations 
  const location = useLocation()

  // useContext
  const {navBarState} = useNavBar()

  // useStates
  const [previewVisibility, setPreviewVisibility] = useState("visible")
  const [nextVisibility, setNextVisibility] = useState("visible")
  const [isOpen, setIsOpen] = useState(false)
  const [factorsNames, setFactorsNames] = useState([])
  const [targetsNames, setTargetsNames] = useState([])
  const [targetsObservationData, setTargetsObservationData] = useState([])

  // useCallback
  const handleNext = useCallback(()=>{
    history.push({
        pathname : '/predict'
    })      
  },[]) 

  const handlePreview = useCallback(()=>{
    history.push({
        pathname : '/explore-dataset'
    })      
  },[]) 

  // useEffect
  useEffect(async()=>{ 
    try {
      const res= await get(
          `${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}`,
          {
              headers:{
                  token: JSON.parse(localStorage.getItem('user')).token
              }
          }
         )
      // build json object from backend data

      setFactorsNames(res.data.columns)

  }
  catch(err){
      console.log(err)
  }
  },[])

  // functions 
  const handleOnDragEnd = async(results) => {
    if (!results.destination || results.destination===null ) return

    if (
      results.destination.droppableId==='targetFactors'
      && results.source.droppableId==='allFactors'){     
      setTargetsNames(targetsNames=>[...targetsNames, factorsNames[results.source.index]])
      setFactorsNames(factorsNames.filter((factorName, index)=>index!=results.source.index))
      try {
        let columnsStr=""
        targetsNames.forEach(targetName => {
          columnsStr +=`columns=${targetName}&`
        })
        columnsStr +=`columns=${factorsNames[results.source.index]}&columns=Date`
        console.log(columnsStr)
        console.log(`${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}?${columnsStr}`)
        const res= await get(
            `${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}?${columnsStr}`,
            {
                headers:{
                    token: JSON.parse(localStorage.getItem('user')).token
                }
            }
           )
           setTargetsObservationData(res.data.rows)
           console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
      return
    }

    if(
      results.destination.droppableId==='allFactors'
      && results.source.droppableId==='targetFactors'){     
      setFactorsNames(factorsNames=>[...factorsNames, targetsNames[results.source.index]])
      setTargetsNames(targetsNames.filter((targetName, index)=>index!=results.source.index))
      return
    }
  }

    return (
        <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={navBarState?"container-with-margin ":"container-without-margin"}>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="choose-target-container">
        <div className="edit-model-container">
          <div>
            <span>Datasets/</span><span style={{color:'#cbd2d0'}}>"dataset.name"</span>
          </div>
        </div>
        <div className="edit-model-container">
          <div className="section-title">
          <div>Choose Targets</div>
          <div className="info">Drag the factors you want us to consider as “target” into the column Targets*</div>
          </div>
          <div className="section-boxes">
          <Droppable droppableId="allFactors">
          {(provided) => (
            <div className="factors-box" {...provided.droppableProps} ref={provided.innerRef}>
              <div className="title">
                All Factors
              </div>
              <div className="tags">
              {factorsNames.map((factorName, index)=>(
            <Draggable key={factorName} draggableId={factorName} index={index}>
            {(provided) => (
                <div className="tag-box"  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div>{factorName}</div>
                </div>
            )}
            </Draggable>   
              ))}
            {provided.placeholder}
              </div>
            </div>
            )}
            </Droppable>
            <Droppable droppableId="targetFactors">
            {(provided) => (
            <div className="targets-box" {...provided.droppableProps} ref={provided.innerRef}>
            <div className="title">
                Targets
            </div>
            <div className="tags">
            {targetsNames.map((factorName, index)=>(
            <Draggable key={factorName} draggableId={factorName+factorName} index={index}>
            {(provided) => (
                <div className="tag-box"  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div>{factorName}</div>
                </div>
            )}
            </Draggable>   
              ))}
            {provided.placeholder}
              </div>
            </div>
            )}
            </Droppable>
          </div>
        </div>

        <div className="edit-model-container">
        <div className="section-title" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>Dataset Visualization</div>
          <button 
          style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}
          onClick={()=>setIsOpen(true)}
          >
            <div>Choose Prediction Horizon</div>
            <img src={predict} alt="predict icon"/>
          </button>
        </div>
        <div className="targets-observation-graph">
        </div>
        </div>
       </div>
       <GraphTarget
       lineChartData={targetsObservationData}
       />
       <NextPreview 
        handleNext={handleNext}
        handlePreview={handlePreview}
        nextVisibility={nextVisibility}
        previewVisibility={previewVisibility}
        />
       </div>
       {/* Prediction Horizon Modal - Popup */}
       <PredictionHorizonModal
        open={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        />
    </DragDropContext>
    </>
    )
}

export default ChooseTarget;