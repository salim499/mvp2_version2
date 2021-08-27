// Import from react
import React, {useState, useCallback} from 'react';

// Import from libraries
import { Bar } from 'react-chartjs-2';
import { useHistory } from 'react-router-dom';

// Import components
import Timeline from '../components/timeline'
import DataSetContainer from '../components/dataSetContainer'
import NextPreview from '../components/nextPreview'

// Import css files
import '../css/choseDateWindow.css'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants
const timelineLevel=3

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};


const ChoseDateWindow = () => {

    // useHistory
    const history = useHistory()

    // useContext
    const {navBarState, setNavBarState} = useNavBar()

    // useState
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")

    // useCallback
    // preview button
    const handlePreview = useCallback (()=>{
      history.push({
          pathname : '/compose-portfolio',
      }) 
    },[])
  
    // next button 
    const handleNext = useCallback (()=>{
        history.push({
            pathname : '/portfolio-causal-model',
        }) 
    },[])

    return(
        <div className={navBarState?"App":"App2"}>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="dataset_set_container">
            <DataSetContainer/>
        </div>
        <div className="graphs-choseDateWindow-bar">
            <Bar data={data} options={options} />
        </div>
        <NextPreview
        handleNext={handleNext}
        handlePreview={handlePreview}
        nextVisibility={nextVisibility}
        previewVisibility={previewVisibility} 
        />
        </div>
    )};

export default ChoseDateWindow;