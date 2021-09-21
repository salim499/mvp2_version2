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

// constants
const timelineLevel=3

const dataFromBackend =[
  {
      "date": "23.07.2007",
      "US Treasuries": 75.9375,
      "US High Yield": 140.1308,
      "US Equities": 1365.45,
    },
    {
      "US Treasuries": 76.0625,
      "US High Yield": 139.1285,
      "US Equities": 1342.09,
    },
    {
      "US Treasuries": 76.234375,
      "US High Yield": 138.0593,
      "US Equities": 1344.03,
    },
    {

      "US Treasuries": 76.90625,
      "US High Yield": 137.1479,
      "US Equities": 1311.59,
    },
    {
      "US Treasuries": 76.8125,
      "US High Yield": 137.1906,
      "US Equities": 1285.23,
    },
    {
      "US Treasuries": 76.6875,
      "US High Yield": 136.824,
      "US Equities": 1305.24,
    },
    {
      "US Treasuries": 76.828125,
      "US High Yield": 135.3339,
      "US Equities": 1288.67,
    },
    {
      "date": "01.08.2007",
      "US Treasuries": 76.859375,
      "US High Yield": 135.7713,
      "US Equities": 1295.72,
    },
    {
      "US Treasuries": 76.859375,
      "US High Yield": 135.7568,
      "US Equities": 1306.12,
    },
    {
      "date": "03.08.2007",
      "US Treasuries": 77.15625,
      "US High Yield": 136.5559,
      "US Equities": 1272.01,
    },
    {
      "US Treasuries": 77.015625,
      "US High Yield": 136.6757,
      "US Equities": 1293.78,
    },
    {
      "date": "07.08.2007",
      "US Treasuries": 76.9375,
      "US High Yield": 136.8472,
      "US Equities": 1306.74,
    },
    {
      "date": "09.08.2007",
      "US Treasuries": 76.796875,
      "US High Yield": 138.2235,
      "US Equities": 1285.14,
    },
    {
      "date": "10.08.2007",
      "US Treasuries": 76.875,
      "US High Yield": 138.3298,
      "US Equities": 1279.06,
    },
    {
      "date": "13.08.2007",
      "US Treasuries": 76.90625,
      "US High Yield": 138.468,
      "US Equities": 1282.68,
    },
    {
      "date": "14.08.2007",
      "US Treasuries": 77.15625,
      "US High Yield": 138.8395,
      "US Equities": 1264.34,
    },
    {
      "date": "15.08.2007",
      "US Treasuries": 77.375,
      "US High Yield": 138.8794,
      "US Equities": 1246.8,
    },
    {
      "date": "17.08.2007",
      "US Treasuries": 77.671875,
      "US High Yield": 138.0627,
      "US Equities": 1278.09,
    },
    {
      "date": "20.08.2007",
      "US Treasuries": 77.796875,
      "US High Yield": 138.1764,
      "US Equities": 1277.39,
    },
    {
      "date": "21.08.2007",
      "US Treasuries": 78.015625,
      "US High Yield": 138.1962,
      "US Equities": 1278.45,
    },
    {
      "US Treasuries": 77.84375,
      "US High Yield": 138.8875,
      "US Equities": 1294.66,
    },
    {
      "US Treasuries": 77.828125,
      "US High Yield": 139.3422,
      "US Equities": 1292.64,
    },
  ]

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
        const res= await get(
            `${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}?columns=${targetsNames.toString()}`,
            {
                headers:{
                    token: JSON.parse(localStorage.getItem('user')).token
                }
            }
           )
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
        <GraphTarget
       lineChartData={dataFromBackend}
       />
        </div>
        </div>
       </div>
       
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