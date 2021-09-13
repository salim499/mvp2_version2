// Import from react
import React from 'react'

// Import css files 
import '../css/exploreDataset.css'

// Import components 
import Table from '../components/Table'
import DeletedFactors from '../components/deletedItems'

// Import contexts
import { useNavBar } from "../contexts/navbar"

function TableView() {

    // useContext
    const {navBarState} = useNavBar()

    return (
        <div className={navBarState?"container-with-margin":"container-without-margin"}>
            <DeletedFactors/>
            <Table/>
        </div>
    )
}

export default TableView
