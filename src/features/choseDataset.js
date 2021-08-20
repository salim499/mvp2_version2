// Import from react
import React, {useState, useCallback} from 'react'

// Import from libraries
import {get, post} from 'axios'

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

// Const and vars
const dndText="Or drag and drop it here"
const selectText="Select a CSV file to import"
const envelopeText="Before you upload your files below, make sure your file is ready to be imported"

    function ChoseDataset() {

    // useContext
    const {navBarState, setNavBarState} = useNavBar()

    // useState 
    const [dataSet, setDataSet] = useState(["dataset1", "dataset2", "dataset3"])
    const [previewVisibility, setPreviewVisibility] = useState("hidden")
    const [nextVisibility, setNextVisibility] = useState("hidden")
    const [dataSourcesNames, setDataSourcesNames] = useState([])

    // useEffect 
    /* get user datasources names */
    useEffect(async ()=>{
      try {
        const res= await get(
            `${process.env.REACT_APP_URL_MASTER}/datasources?fileds=name`
           )
           console.log(res)
      }
      catch {

      }
    },[])   

    // useCallback 
    const handlePostCsv = useCallback(async()=>{
        try {
            const res =await post(
                `${process.env.REACT_APP_URL_MASTER}/datasources`,
                    dataSet
                )
            console.log(res)
        }
        catch {
            console.log("error")
        }
    },[dataSet])

    return (
      <div className={navBarState?"App":"App2"}>
            <Timeline/>
        <div className="start_from_scratch">
            <div className="first_div">
                <div className="first_div-label">
                    Start from scratch
                </div>
                <SelectDndFile
                dndText={dndText}
                selectText={selectText}
                setDataSet={setDataSet}
                setNextVisibility={setNextVisibility}
                />
            </div>
            <div className="second_div">
            <Envelope
            envelopeText={envelopeText}
            />
            </div>
        </div>
        <div className="start_from_existing_files"> 
        <div className="start_from_existing_files-label">
        Or choose from existing Files
        </div>
        <UserCsvFiles
        datasetsNames={datasetsNames}
        datasetIcon={select_csv}
        />       
        </div>
        <NextPreview 
        handleNext={handlePostCsv}
        nextVisibility={nextVisibility}
        previewVisibility={previewVisibility}
        />
      </div>
    )
}

export default ChoseDataset
