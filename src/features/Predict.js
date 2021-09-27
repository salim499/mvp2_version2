// Import from react
import React, {useState, useEffect, useCallback} from 'react'

// Import from libraries
import { useHistory, useLocation } from 'react-router-dom'

// Import components
import Timeline from '../components/timeline'
import NextPreview from '../components/nextPreview'
import UserProfile from '../components/userProfile'
import { Bar } from 'react-chartjs-2'

// Import Icons
import arrowUp from '../assets/icons/arrowUp.svg'
import arrowDown from '../assets/icons/arrowDown.svg'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// constants
const timelineLevel=4

const options2 = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Factors Influence',
        position:'top'
      },
    },
  }

  const data = {
    labels: ["factor1", "factor2", "factor3", "factor4","factor5", "factor6", "factor7", "factor8","factor9", "factor10", "factor11", "factor12"],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 2, 3, -4, 15, -13, 5, -11, -9, 2, -12, 6],
        borderColor: ['green','green','green','red', 'green','red','green','red','red','green', 'red', 'green'],
        backgroundColor:  ['green','green','green','red', 'green','red','green','red','red','green', 'red', 'green'],
      }
    ]
  };

const Predict = () => {

    // useLocation
    const location = useLocation()

    // useHistory
    const history = useHistory()

    // useContext
    const {navBarState} = useNavBar()

    // useState
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")
    const [dataBarChart, setDataBarChart] = useState([])

    // useEffect
    useEffect(()=>{
        console.log(location.state)
        const data=[]
        const labels=[]
        const backgroundColor=[]
        const borderColor=[]
        location.state.predictions[Object.keys(location.state.predictions)[0]].explicativeFactors.forEach(element=>{
            labels.push(element.name)
            data.push(parseFloat(element.performanceAttribution))
            backgroundColor.push('green')
            borderColor.push('red')
            console.log({
                labels:labels,
                datasets:{
                    label:'test',
                    data:data,
                    backgroundColor:backgroundColor,
                    borderColor:borderColor,
                }
            })
            setDataBarChart({
                labels:labels,
                datasets:{
                    label:'test',
                    data:data,
                    backgroundColor:backgroundColor,
                    borderColor:borderColor,
                }
            })
        })
    },[])

    // useCallback
    const handlePreview = useCallback(()=>{
        history.push({
            pathname : '/choose-target'
        })      
    },[]) 

    return(
    <div className={navBarState?"container-with-margin ":"container-without-margin"}>
        <UserProfile/>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="predict-container">
            <div className="edit-model-container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
                <span>Datasets/</span><span style={{color:'#c4c4c4'}}>"dataset.name"</span>
            </div>
            <div>
                <span>From</span><span style={{color:'#c4c4c4'}}>"11/09/2005"</span><span>to</span><span style={{color:'#c4c4c4'}}>"11/09/2020"</span>
            </div>
            </div>
            <div className="predict-table-container">
                <table>
                        <tr>
                        <th>Targets</th>
                        <th>Prediction</th>
                        <th>Confidence Level</th>
                        </tr>
                        <tr>
                        <th style={{width:'43%', display:'flex',alignItems: 'center',justifyContent: 'center'}}></th>
                        {
                        [0,1,2].map((value,index)=>(
                            <th style={{width:'10%', display:'flex',alignItems: 'center',justifyContent: 'center'}}>
                                {
                                location.state.horizons[index]&&
                                location.state.horizons[index].duration+
                                location.state.horizons[index].timeUnit
                                }
                            </th>
                        ))  
                        } 
                        {
                        [0,1,2].map((value,index)=>(
                            <th style={{width:'10%', display:'flex',alignItems: 'center',justifyContent: 'center'}}>
                                {location.state.horizons[index]&&
                                location.state.horizons[index].duration+
                                location.state.horizons[index].timeUnit}
                            </th>
                        ))  
                        }                         
                        </tr>
                        {[0,1,2].map((i)=>(
                        <tr>
                        <td>
                            <div><p>{location.state.predictions[Object.keys(location.state.predictions)[0]].prediction[i].name}</p></div>
                        </td>
                        {/* Mettre une condition pour verifier que la prediction est positive ou negative et afficher la bonne classe en fonction et l'icone */}
                        {
                        [0,1,2].map((j)=>(
                            <td style={{width:'10%'}}>
                            {
                                location.state.predictions[Object.keys(location.state.predictions)[j]].prediction[i].prediction==="+"?
                                <div style={{backgroundColor:'#0000ff'}}>
                                <img src={arrowUp} alt="arrow up"/> 
                                </div>
                                :
                                <div style={{backgroundColor:'#F65656'}}>
                                <img  src={arrowDown} alt="arrow down"/>
                                </div>
                            }
                            </td>
                        ))
                        }
                        {
                        [0,1,2].map((j)=>(
                            <td style={{width:'10%'}}>
                            {
                                <div style={{backgroundColor:'#17A137'}}>
                                <p>{location.state.predictions[Object.keys(location.state.predictions)[j]].prediction[i].confidence}</p>
                                </div>
                            }
                            </td>
                        ))
                        }               
                        </tr>
                        ))}            
                </table>
            </div>
        </div>
        <div className="edit-model-container">
        <Bar data={data} options={options2}/>
        </div>
        <NextPreview 
            handlePreview={handlePreview}
            nextVisibility={nextVisibility}
            previewVisibility={previewVisibility}
            text="Save"
            className="save-button"
            />
    </div>
    )
}

export default Predict;