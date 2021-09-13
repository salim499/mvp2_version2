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
import Envelope from '../components/envelope'
import UserCsvFiles from '../components/horizontalFlexItems'
import NextPreview from '../components/nextPreview'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants
const dndText="Or drag and drop it here"
const selectText="Select a CSV file to import"
const envelopeText="Before you upload your files below, make sure your file is ready to be imported"
const dateError="You have to choose a csv file which contains a date field"
const noErrors="the dataset is uploaded successfully"
const timelineLevel=1

    function ChoseDataset() {

    // useHistory
    const history = useHistory()

    // useContext
    const {navBarState} = useNavBar()

    // useState 
    const [file, setFile] = useState(null)
    const [dataSources, setDataSources] = useState([])
    const [chosenDataSetId, setChosenDataSetId] = useState(null)
    const [previewVisibility, setPreviewVisibility] = useState("hidden")
    const [nextVisibility, setNextVisibility] = useState("hidden")
    const [nextMessage, setNextMessage] = useState("")

    // useEffect 
    /* get user datasources names */
    useEffect(async ()=>{
      try {

        const res= await get(
            `${process.env.REACT_APP_URL_MASTER}/datasources`,
            {
                headers:{
                    token: localStorage.getItem('token')
                }
            }
           )
           setDataSources(res.data)
      }
      catch {

      }
    },[])   

    // useCallback 
    // case post csv
    const handleNext = useCallback(async()=>{
        // case choosing an existing file 
        if(chosenDataSetId!=null){
            history.push({
                pathname : '/compose-portfolio',
                state : chosenDataSetId
            })   
            return         
        } 
        // case choosing and upload an new file 
        try {
            // check if the csv contains a date field
            let containDate=false
            parse(file, {
                download: true,
                step: function(row) {
                    if(row.data.find(rowElment=>rowElment.toLowerCase()==="date")){
                        containDate=true
                    }
                },
                complete: async function () {
                    if(!containDate){
                        setNextMessage(dateError)
                        return
                    }
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
            });
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
        console.log(uploadedFile)
        setFile(uploadedFile)
        setChosenDataSetId(null)
        setNextVisibility('visible')
    },[])

    return (
      <div className={navBarState?"container-with-margin ":"container-without-margin"}>
            <Timeline timelineLevel={timelineLevel}/>
        <div className="start_from_scratch">
            <div className="first_div">
                <div className="first_div-label">
                    Start from scratch
                </div>
                <SelectDndFile
                dndText={dndText}
                selectText={selectText}
                handleUploadFile={handleUploadFile}
                />
            </div>
        </div>
        <div className="start_from_existing_files"> 
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
        <span>{nextMessage}</span>
      </div>
    )
}

export default ChoseDataset
