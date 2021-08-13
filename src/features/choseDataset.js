// Import from react
import React from 'react'

// Import css files 
import '../css/choseDataset.css'

// Import components
import Timeline from '../components/timeline'

// Import icons
import upload_csv from '../assets/icons/upload_csv.svg'
import select_csv from '../assets/icons/1.svg'

// Import contexts
import { useNavBar } from "../contexts/navbar"

function ChoseDataset() {

    const {navBarState, setNavBarState} = useNavBar()

    return (
        <div className={navBarState?"App":"App2"}>
        <div>
            <Timeline/>
        </div>
        <div className="start_from_scratch">
            <div className="first_div">
                <div className="first_div-label">
                    Start from scratch
                </div>
                <div className="first_div-csv_selection">
                  <div className="first_div-csv_selection-icon">
                    <img src={upload_csv}/>
                  </div>
                  <div className="first_div-csv_selection-text"> 
                    Select a CSV file to import 
                  </div>
                  <div className="first_div-csv_selection-text2"> 
                    Or drag and drop it here
                  </div>
                </div>
            </div>
            <div className="second_div-container">
                <div className="second_div-container-line1"></div>
                <div className="second_div-container-line2"></div>
                <div className="second_div-container-text"> 
                Before you upload your files below, make sure your file is ready to be imported
                </div>
            </div>
        </div>
        <div className="start_from_existing_files"> 
        <div className="start_from_existing_files-label">
        Or choose from existing Files
        </div>
        <div className="start_from_existing_files-items"> 
        <div>
            <img src={select_csv}/>
        </div>
        <div>
            <img src={select_csv}/>
        </div>
        <div>
            <img src={select_csv}/>
        </div>
        </div>
        </div>
        </div>
    )
}

export default ChoseDataset
