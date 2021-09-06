// Import from react
import React, {useState, useCallback, useEffect} from 'react';

// Import from libraries
import { useHistory, useLocation } from 'react-router-dom';
import { get } from 'axios';

// Import components
import Timeline from '../components/timeline'
import DataSetContainer from '../components/dataSetContainer'
import NextPreview from '../components/nextPreview'
import DateInterval from '../components/dateInterval'
import DateWindowGraph from '../components/testChart2'

// Import css files
import '../css/choseDateWindow.css'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants
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


const ChoseDateWindow = () => {

    // useLocations 
    const location = useLocation()

    // useHistory
    const history = useHistory()

    // useContext
    const {navBarState} = useNavBar()

    // useState
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [assetsGraphData, setAssetsGraphData] = useState(dataFromBackend)

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
            state : location.state
        }) 
    },[])

    // set datesInterval 
    const handleSetDatesInterval = useCallback ((startD, endD)=>{
      setStartDate(startD)
      setEndDate(endD)
    },[startDate,endDate])

  /*  useEffect (async()=>{
      try {
        const res= await get(`${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}`,
        {
            headers:{
                token: localStorage.getItem('token')
            }
        }
        )
        setAssetsGraphData(res.data.columns)
      }
      catch (e) {
          console.log(e)
      }
    },[])*/

    return(
        <div className={navBarState?"App":"App2"}>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="dataset_set_container">
            <DataSetContainer/>
        </div>
        <div className="graphs-choseDateWindow-bar">
            <DateWindowGraph 
            lineChartData={assetsGraphData}
            handleSetDatesInterval={handleSetDatesInterval}/>
        </div>
          <DateInterval
          startDate={startDate}
          endDate={endDate}/>
          <NextPreview
          handleNext={handleNext}
          handlePreview={handlePreview}
          nextVisibility={nextVisibility}
          previewVisibility={previewVisibility} 
        />
        </div>
    )};

export default ChoseDateWindow;