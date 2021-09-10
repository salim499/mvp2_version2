// Import from react
import React, {useRef, useState, useCallback} from 'react'

// Import from libraries 
import { useDropzone } from "react-dropzone"
import {parse} from 'papaparse'

// Import css files
import '../css/selectDndFile.css'

// Import icons
import upload_csv from '../assets/icons/upload_csv.svg'

// Constants 
const typeError = `The type of this file is not correct, 
                    you have to chose a csv file `

const dndBackgroundColor='rgba(0,0,0,0.1)'

function SelectDndFile(props) {


  // userRef
  const selectDndDiv = useRef()

  // useState
  const [errorMessage, setErrorMessage] = useState(null)

  // useCallback
  const onDrop = useCallback(acceptedFiles => {

 //   if(acceptedFiles[0].type==='application/vnd.ms-excel'){
      // set background of dnd div to default
      selectDndDiv.current.style=null
      // remove error message of dnd and select actions
      setErrorMessage(null)
      // set name and content of csv file to dataSetState
      props.handleUploadFile(acceptedFiles[0])

      /*// get csv contents 
      
      parse(acceptedFiles[0],{
        // transform each line to json object with key from header 	
        header:true,
        // detect numeric and boolean data
        dynamicTyping: true,
        // keep page reactively 
        worker:true,
        // skip empty lines 
        skipEmptyLines:true,
        complete: (results) => {
          props.setDataSet(results)
          props.setNextVisibility('visible')
        }
      })
      */
      return
    //}
    //setErrorMessage(typeError)
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
        <div className="first_div-csv_selection-icon">
          <img src={upload_csv}/>
        </div>
        <div className="first_div-csv_selection-text"> 
          {props.selectText} 
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
