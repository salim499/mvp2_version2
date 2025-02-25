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
        label: 'Target 1',
        data: [10, 12, 13, -4, 5, -3, 25, -11, -9, 12, -2, 6],
        backgroundColor:  ['green','green','green','green', 'green','green','green','green','green','green', 'green', 'green'],
        borderColor:  ['green','green','green','green', 'green','green','green','green','green','green', 'green', 'green'], 
    },
      {
        label: 'Target 2',
        data: [1, 12, 13, -14, 15, -1, 15, -1, -29, 2, -12, 6],
        backgroundColor:  ['blue','blue','blue','blue', 'blue','blue','blue','blue','blue','blue', 'blue', 'blue'],
        borderColor:  ['blue','blue','blue','blue', 'blue','blue','blue','blue','blue','blue', 'blue', 'blue'],
      },
      {
        label: 'Target 3',
        data: [10, 2, 3, -4, 15, -13, 5, -11, -9, 2, -12, 6],
        backgroundColor:  ['orange','orange','orange','orange', 'orange','orange','orange','orange','orange','orange', 'orange', 'orange'],
        borderColor:  ['orange','orange','orange','orange', 'orange','orange','orange','orange','orange','orange', 'orange', 'orange'],
    },
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
        console.log(JSON.parse(localStorage.getItem("targets")))
        const data=[]
        const labels=[]
        const backgroundColor=[]
        const borderColor=[]
        JSON.parse(localStorage.getItem('predictData')).predictions[Object.keys(JSON.parse(localStorage.getItem('predictData')).predictions)[0]].explicativeFactors.forEach(element=>{
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
            pathname : '/choose-target',
        })      
    },[]) 

    const predictions =JSON.parse(localStorage.getItem('predictData')).predictions;

    return(
    <div className={navBarState?"container-with-margin ":"container-without-margin"}>
        <UserProfile/>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="predict-container">
            <div className="edit-model-container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
                <span>Datasets/</span><span style={{color:'#c4c4c4'}}>{localStorage.getItem('nameDataSet')}</span>
            </div>
            <div>
                <span>From</span><span style={{color:'#c4c4c4'}}>{JSON.parse(localStorage.getItem('dateDataSet')).startDate}</span><span>to</span><span style={{color:'#c4c4c4'}}>{JSON.parse(localStorage.getItem('dateDataSet')).endDate}</span>
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
                        <th></th>
                        <th>
                        {
                        [0,1,2].map((value,index)=>(
                            JSON.parse(localStorage.getItem('predictData')).horizons.length>index&&
                            <td>
                                {
                                JSON.parse(localStorage.getItem('predictData')).horizons[index]&&
                                JSON.parse(localStorage.getItem('predictData')).horizons[index].duration+
                                JSON.parse(localStorage.getItem('predictData')).horizons[index].timeUnit
                                }
                            </td>
                        ))  
                        } 
                        </th>
                        <th>
                        {
                        [0,1,2].map((value,index)=>(
                            JSON.parse(localStorage.getItem('predictData')).horizons.length>index&&
                            <div>
                                {JSON.parse(localStorage.getItem('predictData')).horizons[index]&&
                                JSON.parse(localStorage.getItem('predictData')).horizons[index].duration+
                                JSON.parse(localStorage.getItem('predictData')).horizons[index].timeUnit}
                            </div>
                        ))  
                        }    
                        </th>                     
                        </tr>
                        {[0,1,2].map((i)=>(
                        JSON.parse(localStorage.getItem("targets"))[i]&&
                        <tr>
                        <td>
                            <div><p>{JSON.parse(localStorage.getItem("targets"))[i]}</p></div>
                        </td>
                        {/* Mettre une condition pour verifier que la prediction est positive ou negative et afficher la bonne classe en fonction et l'icone */}
                        <td>
                        {
                        [0,1,2].map((j)=>(
                            JSON.parse(localStorage.getItem('predictData')).horizons.length>j&&
                            <div>
                            {
                                JSON.parse(localStorage.getItem('predictData')).predictions[Object.keys(JSON.parse(localStorage.getItem('predictData')).predictions)[j]].prediction[i].prediction==="+"?
                                <div>
                                <img src={arrowUp} alt="arrow up"/> 
                                </div>
                                :
                                <div>
                                <img  src={arrowDown} alt="arrow down"/>
                                </div>
                            }
                            </div>
                        ))
                        }
                        </td>
                        <td>
                        {
                        [0,1,2].map((j)=>(
                            JSON.parse(localStorage.getItem('predictData')).horizons.length>j&&
                            <div>
                            {
                                <div style={{backgroundColor:predictions[Object.keys(predictions)[j]].prediction[i].confidence.substring(0, predictions[Object.keys(predictions)[j]].prediction[i].confidence.length-1) >50 ? "#17A137" : "rgba(23, 161, 55, 0.5)", color:'white', width:'68px', height:'38px', borderRadius:'5px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <p>{predictions[Object.keys(predictions)[j]].prediction[i].confidence}</p>
                                </div>
                            }
                            </div>
                        ))
                        }    
                        </td>           
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