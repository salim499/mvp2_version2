// Import from react
import React, {useState, useEffect, useCallback} from 'react'

// Import from libraries
import { useHistory, useLocation } from 'react-router-dom'

// Import components
import Timeline from '../components/timeline'
import NextPreview from '../components/nextPreview'
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
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4],
        borderColor: ['red','green','red','blue'],
        backgroundColor:  ['red','green','red','blue'],
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
    const [nextVisibility, setNextVisibility] = useState("hidden")
    const [dataBarChart, setDataBarChart] = useState([])

    // useEffect
    useEffect(()=>{
        console.log(location.state.predictions[Object.keys(location.state.predictions)[0]])
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
        <Timeline timelineLevel={timelineLevel}/>
        <div className="predict-container">
            <div className="edit-model-container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
                <span>Datasets/</span><span style={{color:'#c4c4c4'}}>"dataset.name"</span>
            </div>
            <div>
                <span>From</span><span style={{color:'#c4c4c4'}}>"11/09/2005"</span><span>to</span><span style={{color:'#c4c4c4'}}>"11/09/2020"</span>
            </div>
            <div>
                <span>Prediction Horizon:</span><span style={{color:'#c4c4c4'}}>"+24h"</span>
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
                        <th style={{width:'10%', display:'flex',alignItems: 'center',justifyContent: 'center'}}>24H</th>
                        <th style={{width:'10%', display:'flex',alignItems: 'center',justifyContent: 'center'}}>48H</th>
                        <th style={{width:'10%', display:'flex',alignItems: 'center',justifyContent: 'center'}}>72H</th>
                        <th style={{width:'9%', display:'flex',alignItems: 'center',justifyContent: 'center'}}>24H</th>
                        <th style={{width:'9%', display:'flex',alignItems: 'center',justifyContent: 'center'}}>48H</th>
                        <th style={{width:'9%', display:'flex',alignItems: 'center',justifyContent: 'center'}}>72H</th>
                        </tr>
                        {[0,1,2].map((i)=>(
                        <tr>
                        <td>
                            <div><p>{location.state.predictions[Object.keys(location.state.predictions)[0]].prediction[i].name}</p></div>
                        </td>
                        {/* Mettre une condition pour verifier que la prediction est positive ou negative et afficher la bonne classe en fonction et l'icone */}
                        <td>
                        {
                            location.state.predictions[Object.keys(location.state.predictions)[0]].prediction[0].prediction==="+"?
                            <div style={{backgroundColor:'#0000ff'}}>
                            <img src={arrowUp} alt="arrow up"/> 
                            </div>
                            :
                            <div style={{backgroundColor:'#F65656'}}>
                            <img  src={arrowDown} alt="arrow down"/>
                            </div>
                        }
                        {
                            location.state.predictions[Object.keys(location.state.predictions)[0]].prediction[1].prediction==="+"?
                            <div style={{backgroundColor:'#0000ff'}}>
                            <img src={arrowUp} alt="arrow up"/> 
                            </div>
                            :
                            <div style={{backgroundColor:'#F65656'}}>
                            <img  src={arrowDown} alt="arrow down"/>
                            </div>
                        }
                        {
                            location.state.predictions[Object.keys(location.state.predictions)[0]].prediction[2].prediction==="+"?
                            <div style={{backgroundColor:'#0000ff'}}>
                            <img src={arrowUp} alt="arrow up"/> 
                            </div>
                            :
                            <div style={{backgroundColor:'#F65656'}}>
                            <img  src={arrowDown} alt="arrow down"/>
                            </div>
                        }
                        </td>
                        {/* Mettre une condition pour afficher 4 niveaux differemys de vert */}
                        <td>
                            <div style={{backgroundColor:'#17A137'}}>
                                <p>{location.state.predictions[Object.keys(location.state.predictions)[0]].prediction[0].confidence}</p>
                            </div>
                            <div style={{backgroundColor:'#17A137'}}>
                                <p>{location.state.predictions[Object.keys(location.state.predictions)[0]].prediction[1].confidence}</p>
                            </div>
                            <div style={{backgroundColor:'#17A137'}}>
                                <p>{location.state.predictions[Object.keys(location.state.predictions)[0]].prediction[2].confidence}</p>
                            </div>
                        </td>
                        </tr>
                        ))}            
                </table>
            </div>
        </div>
        <div className="edit-model-container">
        <Bar data={dataBarChart} options={options2}/>
        </div>
        <NextPreview 
            handlePreview={handlePreview}
            nextVisibility={nextVisibility}
            previewVisibility={previewVisibility}
            />
    </div>
    )
}

export default Predict;