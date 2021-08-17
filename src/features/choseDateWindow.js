// Import from react
import React from 'react';

// Import from libraries
import { Bar } from 'react-chartjs-2';

// Import components
import Timeline from '../components/timeline'
import DataSetContainer from '../components/dataSetContainer'

// Import css files
import '../css/choseDateWindow.css'

// Import contexts
import { useNavBar } from "../contexts/navbar"

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

    const {navBarState, setNavBarState} = useNavBar()

    return(
        <div className={navBarState?"App":"App2"}>
        <div>
            <Timeline/>
        </div>
        <div className="dataset_set_container">
            <DataSetContainer/>
        </div>
        <div className="graphs-choseDateWindow-bar">
            <Bar data={data} options={options} />
        </div>
        </div>
    )};

export default ChoseDateWindow;