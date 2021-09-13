// Import from react
import React from 'react'

// Import css files 
import '../css/TableView.css'

// Import components 
import Table from '../components/Table'
import Histogram from '../components/histogram'
// Import contexts
import { useNavBar } from "../contexts/navbar"

function TableView() {

    // useContext
    const {navBarState} = useNavBar()

    return (
        <div className={navBarState?"container-with-margin":"container-without-margin"}>
            <Table/>
            <Histogram/>
        </div>
    )
}

export default TableView
