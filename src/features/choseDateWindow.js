// Import from react
import React, {useState, useCallback, useEffect} from 'react';

// Import from libraries
import { useHistory, useLocation } from 'react-router-dom';
import { get } from 'axios';

// Import components
import Timeline from '../components/timeline'
import DataSetContainer from '../components/dataSetContainer'
import NextPreview from '../components/nextPreview'
import DateWindow from '../components/verticalBar'
import DateInterval from '../components/dateInterval'
// Import css files
import '../css/choseDateWindow.css'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants
const timelineLevel=3




const ChoseDateWindow = () => {

    // useLocations 
    const location = useLocation()

    // useHistory
    const history = useHistory()

    // useContext
    const {navBarState, setNavBarState} = useNavBar()

    // useState
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [columns, setColumns] = useState([])

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

    useEffect (async()=>{
      try {
        const res= await get(`${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}`,
        {
            headers:{
                token: localStorage.getItem('token')
            }
        }
        )
        setColumns(res.data.columns)
      }
      catch (e) {
          console.log(e)
      }
    },[])

    return(
        <div className={navBarState?"App":"App2"}>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="dataset_set_container">
            <DataSetContainer/>
        </div>
        <div className="graphs-choseDateWindow-bar">
            <DateWindow
            handleSetDatesInterval={handleSetDatesInterval}
            columns={columns}/>
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