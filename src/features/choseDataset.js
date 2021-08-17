// Import from react
import React from 'react'

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
const datasetsNames=["dataset1", "dataset2", "dataset3"]

function ChoseDataset() {

    const {navBarState, setNavBarState} = useNavBar()

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
        <NextPreview/>
        </div>
    )
}

export default ChoseDataset
