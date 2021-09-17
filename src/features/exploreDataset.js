// Import from react
import React, {useEffect, useState, useCallback} from 'react'

// Import from libraries
import {get} from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

// Import css files 
import '../css/exploreDataset.css'

// Import components 
import Timeline from '../components/timeline'
import Table from '../components/Table'
import DeletedFactors from '../components/deletedItems'
import UserProfile from '../components/userProfile'
import ModalHistogram from '../components/modalHistogram'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants
const timelineLevel=2

function ExploreDataset() {

    // useHistory
    const history = useHistory()

    // useLocations 
    const location = useLocation()

    // useContext
    const {navBarState} = useNavBar()

    // useState
    const [factorsTable, setFactorsTable] = useState([])
    const [factorsDeleted, setFactorsDeleted] = useState([])
    const [nameHistogramModal, setNameHistogramModal] = useState(null)
    const [histogramData, setHistogramData] = useState([])

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

            console.log(res.data)
            for (let i=0; i<res.data.columns.length; i++){
                setFactorsTable(factorsTable=>[...factorsTable, {
                    name:res.data.columns[i],
                    type:res.data.dataType[i],
                    stationaryState:res.data.stationaryState[res.data.columns[i]],
                    histogram:res.data.histograms.find(e=>e.name===res.data.columns[i])
                    }])
            }
        }
        catch(err){
            console.log(err)
        }
    },[])

    // useCallback
    const handleDeleteFactor = useCallback((factorName) => {
        // add the factor to eliminated factors 
        const deletedFactor = factorsTable.find(factor=>factor.name===factorName)
        setFactorsDeleted(factorsDeleted=>[...factorsDeleted,deletedFactor])
        // remove the factor from factorsTable
        setFactorsTable(factorsTable.filter(factor=>factor.name!=factorName))
    },[factorsTable, factorsDeleted])

    const handleRestartFactor = useCallback((factorName) => {
        console.log(factorName)
       // add the factor to eliminated factors 
       const deletedFactor = factorsDeleted.find(factor=>factor.name===factorName)
       console.log(deletedFactor)
       setFactorsTable(factorsTable=>[...factorsTable,deletedFactor])
       // remove the factor from factorsTable
       setFactorsDeleted(factorsDeleted.filter(factor=>factor.name!=factorName))
    },[factorsTable, factorsDeleted])

    const handleShowHistogram = useCallback((factorName) => {
        setNameHistogramModal(factorName)
        setHistogramData(factorsTable.find(factor=>factor.name===factorName).histogram)
    },[factorsTable])

    const handleHideHistogramModal = useCallback((factorName) => {
        setNameHistogramModal(null)
    },[])

    return (
        <div className={navBarState?"container-with-margin":"container-without-margin"}>
            <UserProfile/>
            <Timeline 
            timelineLevel={timelineLevel}/>
            <DeletedFactors 
            factorsDeleted={factorsDeleted}
            handleRestartFactor={handleRestartFactor}/>
            <Table 
            factorsTable={factorsTable}
            handleDeleteFactor={handleDeleteFactor}
            handleShowHistogram={handleShowHistogram}
            />
            {
            nameHistogramModal!=null&&
            <ModalHistogram 
            histogramData={histogramData}
            handleHideHistogramModal={handleHideHistogramModal}/>
            }
        </div>
    )
}

export default ExploreDataset
