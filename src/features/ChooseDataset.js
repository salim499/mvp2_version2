// Import from react
import React, {useState, useEffect, useCallback} from 'react'

// Import from libraries
import {get, post} from 'axios'
import { useHistory } from 'react-router-dom'
import {parse} from 'papaparse'

// Import css files 
import '../css/choseDataset.css'

// Import icons
import select_csv from '../assets/icons/select_csv.svg'

// Import components
import Timeline from '../components/timeline'
import SelectDndFile from '../components/selectDndFile'
import UserCsvFiles from '../components/horizontalFlexItems'
import NextPreview from '../components/nextPreview'
import UserProfile from '../components/userProfile'
import ModalWarning from '../components/modalWarning'
import ModalOk from '../components/modalOk'

// Import contexts
import { useNavBar } from "../contexts/navbar"
import { useAuth } from "../contexts/user"

// Constants
const dndText="Or drag and drop it here"
const selectText="Select a CSV file to import"
const modifyText="Modify the selected file"
const timelineLevel=1

    function ChooseDataset() {

    // useHistory
    const history = useHistory()

    // useContext
    const { currentUser} = useAuth()
    const {navBarState} = useNavBar()

    // useState 
    const [file, setFile] = useState(null)
    const [dataSources, setDataSources] = useState([])
    const [chosenDataSetId, setChosenDataSetId] = useState(null)
    const [previewVisibility, setPreviewVisibility] = useState("hidden")
    const [nextVisibility, setNextVisibility] = useState("hidden")
    const [cvsOk, setCsvOk] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [minDate, setMinDate] = useState(null)
    const [maxDate, setMaxDate] = useState(null)

    // useEffect 
    /* get user datasources names */
    useEffect(async ()=>{
      try {

        const res= await get(
            `${process.env.REACT_APP_URL_MASTER}/datasources`,
            {
                headers:{
                    token: JSON.parse(localStorage.getItem('user')).token
                }
            }
           )
           setDataSources(res.data)
      }
      catch {

      }
    },[currentUser])   

    // useCallback 
    // case post csv
    const handleNext = useCallback(async()=>{
        // case choosing an existing file 
        if(chosenDataSetId!=null){
            history.push({
                pathname : '/explore-dataset',
                state : chosenDataSetId
            })   
            return         
        } 
        // case choosing and upload an new file 
        try {
            const formData = new FormData()
            formData.append("files", file)
            formData.append("dateInterval",JSON.stringify({endDate:endDate,startDate:startDate}))
            const res =await post(
                `${process.env.REACT_APP_URL_MASTER}/datasources`,
                    formData,
                    {
                        headers:{
                            token: JSON.parse(localStorage.getItem('user')).token
                        }
                    }
            )
            history.push({
                pathname : '/explore-dataset',
                state : res.data.id
            })
        }
        catch {
            console.log("error")
        }
    },[file, chosenDataSetId])

    // case chose an existing csv file (dataset)
    const handleChoseDataset = useCallback((datasetId)=>{
        setChosenDataSetId(datasetId)
        setFile(null)
        setNextVisibility('visible')
    },[])
    // case upload a new csv file 
    const handleUploadFile = useCallback((uploadedFile) => {

        // check if the csv contains a date field
        let containDate=false
        let dates =[]
        parse(uploadedFile, {
           // download: true,
            step: function(row) {
                if(row.data.find(rowElment=>rowElment.toLowerCase()==="date")){
                    containDate=true
                    return
                }
                if(containDate){
                    dates.push(row.data[0])
                }
            },
            complete: async function (data) {
                console.log(dates)
                if(!containDate){
                    setCsvOk(false)
                    setOpenModal(true) 
                    return
                }
                if(containDate){
                    setMinDate(dates[0])
                    setMaxDate(dates[dates.length-1])
                    setStartDate(dates[0])
                    setEndDate(dates[dates.length-1])
                    setCsvOk(true)
                    setOpenModal(true) 
                    setFile(uploadedFile)
                    setChosenDataSetId(null)
                    setNextVisibility('visible')
                    return
                }              
            }
        });
    },[])

    const handleHideModal = useCallback(() => {
        setOpenModal(false)
    },[])

    const handleChoseDates = useCallback((dateFrom, dateTo) => {
        setStartDate(dateFrom)
        setEndDate(dateTo)
        setOpenModal(false) 
    },[])


    return (
        <>
      <div className={navBarState?"container-with-margin ":"container-without-margin"}>
        <UserProfile/>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="edit-model-container">
            <div className="first_div">
                <div className="first_div-label">
                    Start from scratch
                </div>
                <SelectDndFile
                dndText={dndText}
                selectText={selectText}
                modifyText={modifyText}
                handleUploadFile={handleUploadFile}
                />
            </div>
        </div>
        <div className="edit-model-container"> 
        <div className="start_from_existing_files-label">
        Or choose from existing Files
        </div>
        <UserCsvFiles
        datasets={dataSources}
        datasetIcon={select_csv}
        handleChoseDataset={handleChoseDataset}
        />       
        </div>
        <NextPreview 
        handleNext={handleNext}
        nextVisibility={nextVisibility}
        previewVisibility={previewVisibility}
        />
      </div>
      {
      openModal && !cvsOk &&
      <ModalWarning handleHideModal={handleHideModal}/>
      }   
      {
      openModal&& cvsOk &&
      <ModalOk 
      minDate={minDate}
      maxDate={maxDate}
      handleHideModal={handleHideModal}
      handleChoseDates={handleChoseDates}/>
      }    
    </>
    )
}

export default ChooseDataset
