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
    const [nextMessage, setNextMessage] = useState("")
    const [cvsOk, setCsvOk] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    // useEffect 
    /* get user datasources names */
    useEffect(async ()=>{
      try {
        console.log(currentUser)
        const res= await get(
            `${process.env.REACT_APP_URL_MASTER}/datasources`,
            {
                headers:{
                    token: currentUser.token
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
            const res =await post(
                `${process.env.REACT_APP_URL_MASTER}/datasources`,
                    formData,
                    {
                        headers:{
                            token: localStorage.getItem('token')
                        }
                }
            )
            history.push({
                pathname : '/compose-portfolio',
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
        parse(uploadedFile, {
            download: true,
            step: function(row) {
                if(row.data.find(rowElment=>rowElment.toLowerCase()==="date")){
                    containDate=true
                }
            },
            complete: async function () {
                if(!containDate){
                    console.log("no contain")
                    setCsvOk(false)
                    setOpenModal(true) 
                    return
                }
                if(containDate){
                    console.log("contain")
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
        console.log(dateFrom, dateTo)
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
      <ModalOk handleHideModal={handleHideModal}
      handleChoseDates={handleChoseDates}/>
      }    
    </>
    )
}

export default ChooseDataset
