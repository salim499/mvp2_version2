// Import from react
import React, {useRef, useState, useCallback} from 'react'

// Import from libraries 
import { useDropzone } from "react-dropzone"
import {parse} from 'papaparse'

// Import css files
import '../css/selectDndFile.css'

// Import icons
import upload_csv from '../assets/icons/upload_csv.svg'

const dndBackgroundColor='rgba(0,0,0,0.1)'

function SelectDndFile(props) {

  // userRef
  const selectDndDiv = useRef()

  // useState
  const [errorMessage, setErrorMessage] = useState(null)
  const [fileName, setFileName] = useState(null)

  // useCallback
  const onDrop = useCallback(acceptedFiles => {
      // setFileName
      setFileName(acceptedFiles[0].name)
      // set background of dnd div to default
      selectDndDiv.current.style=null
      // remove error message of dnd and select actions
      setErrorMessage(null)
      // set name and content of csv file to dataSetState
      props.handleUploadFile(acceptedFiles[0])
      
  }, [])

  // useDropzone
  const { getRootProps, getInputProps } = useDropzone({onDrop})

  // functions 
  const handleDragEnter = () => {
    // change background of dnd div
    selectDndDiv.current.style.background=dndBackgroundColor
  }
  const handleDragLeave = () => {
    // set background of dnd div to default
    selectDndDiv.current.style=null
  }

    return (
      <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="first_div-csv_selection" 
      ref={selectDndDiv}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      >
        <div>
        {fileName}
        </div>
        <br/>
        {props.startDate!=null&&props.endDate!=null&&
          <div>
          {"from "+props.startDate}
          {" to "+props.endDate}
          </div>
        }
        <div className="first_div-csv_selection-icon">
          <img src={upload_csv}/>
        </div>
        <div className="first_div-csv_selection-text"> 
          {fileName===null?
          props.selectText:
          props.modifyText}
        </div>
        <div className="first_div-csv_selection-text2"> 
          {props.dndText}
        </div>
        {
          errorMessage!=null&&
          <div className="first_div-csv_selection-text2"> 
          {errorMessage}
        </div>
        }
      </div>
      </div>
    )
}

export default SelectDndFile
