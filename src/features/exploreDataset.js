// Import from react
import React, {useEffect, useState, useCallback} from 'react'

// Import from libraries
import {get, put} from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'

// Import css files 
import '../css/exploreDataset.css'

// Import components 
import Timeline from '../components/timeline'
import Table from '../components/Table'
import DeletedFactors from '../components/deletedItems'
import UserProfile from '../components/userProfile'
import ModalHistogram from '../components/modalHistogram'
import NextPreview from '../components/nextPreview'

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
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")
    const [factorsTable, setFactorsTable] = useState([])
    const [factorsDeleted, setFactorsDeleted] = useState([])
    const [nameHistogramModal, setNameHistogramModal] = useState(null)
    const [histogramData, setHistogramData] = useState([])
    const [chosenPaginationNumber, setChosenPaginationNumber] = useState(1)
    const [paginationNumber, setPaginationNumber] = useState(1)
    const [columnsToSave, setColumnsToSave] = useState([])
    const [nameDataSet, setNameDataSet] = useState(null)

    // useEffect 
    useEffect(async()=>{
        try {
            const res= await get(
                `${process.env.REACT_APP_URL_MASTER}/datasources/${location.state.id}`,
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
                    type:res.data.dataType[res.data.columns[i]],
                    stationaryState:res.data.stationaryState[res.data.columns[i]],
                    histogram:res.data.histograms[i]
                    }])
            }
            // setNameDataSet
            setNameDataSet(res.data.name)

        }
        catch(err){
            console.log(err)
        }
    },[])

    useEffect(()=>{
        // setPaginationNumber
        if (factorsTable.length % 10 === 0 ){
            setPaginationNumber(parseInt(factorsTable.length / 10))
            return
        }
        if (factorsTable.length % 10 != 0 ){
            setPaginationNumber(parseInt(factorsTable.length / 10)+1)
            return
        }
    },[factorsTable])

    // useCallback
    const handleDeleteFactor = useCallback((factorName) => {
        // add the factor to eliminated factors 
        const deletedFactor = factorsTable.find(factor=>factor.name===factorName)
        setFactorsDeleted(factorsDeleted=>[...factorsDeleted,deletedFactor])
        // remove the factor from factorsTable
        setFactorsTable(factorsTable.filter(factor=>factor.name!=factorName))
        console.log(factorsTable.map(factor => factor.name).filter(element=>element!=factorName))
        // set columns to save
        setColumnsToSave(factorsTable.map(factor => factor.name).filter(element=>element!=factorName))
    },[factorsTable, factorsDeleted])

    const handleRestartFactor = useCallback((factorName) => {
        console.log(factorName)
       // add the factor to eliminated factors 
       const deletedFactor = factorsDeleted.find(factor=>factor.name===factorName)
       console.log(deletedFactor)
       setFactorsTable(factorsTable=>[...factorsTable,deletedFactor])
       // remove the factor from factorsTable
       setFactorsDeleted(factorsDeleted.filter(factor=>factor.name!=factorName))
       // set columns to save
       console.log([...factorsTable.map(factor => factor.name),factorName])
       setColumnsToSave([...factorsTable.map(factor => factor.name),factorName])
    },[factorsTable, factorsDeleted])

    const handleShowHistogram = useCallback((factorName) => {
        setNameHistogramModal(factorName)
        setHistogramData(factorsTable.find(factor=>factor.name===factorName).histogram)
    },[factorsTable])

    const handleHideHistogramModal = useCallback((factorName) => {
        setNameHistogramModal(null)
    },[])

    const handleNext = useCallback(async()=>{
        /*try{
            const res= await put(
                `${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}`,
                {columns:columnsToSave},
                {
                    headers:{
                        token: JSON.parse(localStorage.getItem('user')).token
                    },
                },
               )
               console.log(res)
        }
        catch(err){
            console.log(err)
        }*/
        history.push({
            pathname : '/choose-target',
            state : {id:location.state.id, name:nameDataSet}
        })
    },[columnsToSave, nameDataSet])

    const handlePreview = useCallback(()=>{
        history.push({
            pathname : '/choose-dataset',
        })
    },[])

    // functions
    const handlePagination = (number) => {
        setChosenPaginationNumber(number)
        console.log(number)
    }

    return (
        <div className={navBarState?"container-with-margin":"container-without-margin"}>
            <UserProfile/>
            <Timeline 
            timelineLevel={timelineLevel}/>
            <div className="edit-model-container">
                <div>
                    <span>Datasets/</span><span style={{color:'#cbd2d0'}}>
                        {
                        nameDataSet!=null?nameDataSet:
                        location.state.name&&location.state.name
                        }
                    </span>
                </div>
            </div>
            <DeletedFactors 
            factorsDeleted={factorsDeleted}
            handleRestartFactor={handleRestartFactor}/>
            <Table 
            chosenPaginationNumber={chosenPaginationNumber}
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
            <Pagination
            count={paginationNumber}
            onChange={(e, number)=>handlePagination(number)}
            color="#081c4d"/>
            <NextPreview 
            handleNext={handleNext}
            handlePreview={handlePreview}
            nextVisibility={nextVisibility}
            previewVisibility={previewVisibility}
            />
        </div>
    )
}

export default ExploreDataset
