// Import from react
import React, {useState, useCallback, useEffect} from 'react'

// Import from libraries
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import { useHistory, useLocation } from 'react-router-dom'
import { get, post } from 'axios'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Import components
import GraphTarget from '../components/testChart2'
import PredictionHorizonModal from '../components/PredictionHorizonModal';
import Timeline from '../components/timeline'
import NextPreview from '../components/nextPreview'
import UserProfile from '../components/userProfile'
import Loader from '../components/loader'


// Import Icons
import predict from '../assets/icons/predict.svg'
import predictBlue from '../assets/icons/predict_blue.svg'

// Constants
const timelineLevel=3

let dataFromBackend = 
{
    id: '8b9b74',
    'modelId': 'idx3398hf19',
    'user_query': 
    [   
        {
        name: 'factorX',
        value: 8765875.1
        },
        {
        name: 'factor2',
        value: 587.51
        }
    ],
    'predictions': {
   '24h':{
    'prediction' :
    [
        {name:'name1', prediction:'+', confidence:'90%'},
        {name:'name2', prediction:'+', confidence:'70%'},
        {name:'name3', prediction:'-', confidence:'20%'}
    ],
    'explicativeFactors':
    [
        {name:'nameX', performanceAttribution:'+55%'},
        {name:'nameY', performanceAttribution:'-22%'},
        {name:'nameZ', performanceAttribution:'+10%'}
    ]
   },
   '48h':{
    'prediction' :
    [
        {name:'name1', prediction:'-', confidence:'-90%'},
        {name:'name2', prediction:'-', confidence:'70%'},
        {name:'name3', prediction:'-', confidence:'20%'}
    ],
    'explicativeFactors':
    [
        {name:'nameX', performanceAttribution:'+55%'},
        {name:'nameY', performanceAttribution:'-22%'},
        {name:'nameZ', performanceAttribution:'10%'}
    ]
   },
   '72h':{
    'prediction' :
    [
        {name:'name1', prediction:'+', confidence:'9%'},
        {name:'name2', prediction:'-', confidence:'70%'},
        {name:'name3', prediction:'+', confidence:'620%'}
    ],
    'explicativeFactors':
    [
        {name:'nameX', performanceAttribution:'+55%'},
        {name:'nameY', performanceAttribution:'-22%'},
        {name:'nameZ', performanceAttribution:'10%'}
    ]
   },
}
}

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

  const [ horizons, setHorizons] = useState([{duration:"1", timeUnit:"days"}]);
  const [horizonsSummary,setHorizonsSummary]= useState(false);
  const [editMode, setEditMode]=useState(false);
  const [showLoader, setShowLoader] = useState(true)

  // useCallback
  const handleNext = useCallback(async()=>{
/*    try {
      const res= await post(`${process.env.REACT_APP_URL_MASTER}/models`,
      {
        dataSourceId:location.state, 
        targets:targetsNames,
        predictionHorizon:horizons,
      },
      {
          headers:{
              token: localStorage.getItem('token')
          },                      
      }
      )
      const res2 = await post(`${process.env.REACT_APP_URL_MASTER}/model-predictions`,
        {
        modelId:res.data.id
        },
        {
          headers:{
              token: localStorage.getItem('token')
          },                      
        }
        )
      history.push({
        pathname : '/predict',
        state:dataFromBackend
      })  
    }
    catch (err) {
        console.log(err)
    }  */
    localStorage.setItem('predictData', JSON.stringify({...dataFromBackend, horizons}))
    history.push({
      pathname : '/predict'
    })   
  },[targetsNames, horizons]) 

  const handlePreview = useCallback(()=>{
    history.push({
        pathname : '/explore-dataset',
    })      
  },[]) 

  // useEffect
  useEffect(async()=>{ 
    try {
      const res= await get(
          `${process.env.REACT_APP_URL_MASTER}/datasources/${localStorage.getItem('id2DataSet')}`,
          {
              headers:{
                  token: JSON.parse(localStorage.getItem('user')).token
              }
          }
         )
      // build json object from backend data
      setFactorsNames(res.data.columns.filter(factorName=>res.data.dataType[factorName]==="numerical"))
      setShowLoader(false)
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
        columnsStr +=`columns=${factorsNames[results.source.index]}&columns=date`
        const res= await get(
            `${process.env.REACT_APP_URL_MASTER}/datasources/${localStorage.getItem('id2DataSet')}?${columnsStr}`,
            {
                headers:{
                    token: JSON.parse(localStorage.getItem('user')).token
                }
            }
           )
           //console.log(res.data.rows)
           /*setTargetsObservationData([])
           const tab =[]
           for(let i=0;i<res.data.rows.length-10;i=i+10){
             tab.push(res.data.rows[i])
           }*/
           setTargetsObservationData(res.data.rows)
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
      try {
        let columnsStr=""
        targetsNames.forEach(targetName => {
          if(targetName!=targetsNames[results.source.index]){
          columnsStr +=`columns=${targetName}&`
          }
        })
        columnsStr +=`columns=date`
        const res= await get(
            `${process.env.REACT_APP_URL_MASTER}/datasources/${location.state.id2}?${columnsStr}`,
            {
                headers:{
                    token: JSON.parse(localStorage.getItem('user')).token
                }
            }
           )
           setTargetsObservationData(res.data.rows)
      }
      catch(err){
        console.log(err)
      }
      return
    }
  }

    return (
      <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={navBarState?"container-with-margin ":"container-without-margin"}>
      {
        !showLoader?
        <>
      <UserProfile/>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="choose-target-container">
        <div className="edit-model-container">
          <div>
            <span>Datasets/</span><span style={{color:'#cbd2d0'}}>{localStorage.getItem('nameDataSet')}</span>
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
          style={{display:'flex', justifyContent:'center', alignItems:'center'}}
          onClick={()=>setIsOpen(true)}
          >  
            {
            editMode ? <div style={{marginRight:'10px'}}>Edit Prediction Horizon</div>
            :
            <div style={{marginRight:'10px'}}>Choose Prediction Horizon</div>
            }
            <img src={predict} alt="predict icon"/>
          </button>
        </div>
        <div className="targets-observation-graph">
        <GraphTarget
       lineChartData={targetsObservationData}
       />
        </div>
        {horizonsSummary===true &&
        <div className="horizons-chosen">
          {horizons.map((horizon, index)=>{
            return(
              <div className="horizon-chosen">
            <div>{horizon.duration}&nbsp;</div>
            <div>{horizon.timeUnit.charAt().toUpperCase()+ horizon.timeUnit.slice(1)}</div>
            <br/><br/>
            <img src={predictBlue} alt="predict"/>
            </div>
            )
          })}       
        </div>
        }
        </div>
       </div>
       <NextPreview 
        handleNext={handleNext}
        handlePreview={handlePreview}
        nextVisibility={nextVisibility}
        previewVisibility={previewVisibility}
        />        
        </>
        :<div style={{marginTop:'200px'}}><Loader/></div>
      }
       </div>
       {/* Prediction Horizon Modal - Popup */}
       <PredictionHorizonModal
        open={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        horizons={horizons}
        setHorizons={setHorizons}
        setHorizonsSummary={setHorizonsSummary}
        setEditMode={setEditMode}
        />
    </DragDropContext>
    </>
    )
}

export default ChooseTarget;