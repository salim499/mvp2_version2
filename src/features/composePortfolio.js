// Import from 'react
import React from 'react'

// Import css files 
import '../css/composePortfolio.css'

// Import components
import Timeline from '../components/timeline'
import DataSetContainer from '../components/dataSetContainer'
import ListFactorsContainer from '../components/dragSection'
import AddCategory from '../components/addItem'
import Category from '../components/dropItem'
import NextPreview from '../components/nextPreview'

// Import contexts
import { useNavBar } from "../contexts/navbar"

function ComposePortfolio() {

    const {navBarState, setNavBarState} = useNavBar()

    return (
      <div className={navBarState?"App":"App2"}>
        <Timeline/>
        <DataSetContainer/>
        <ListFactorsContainer/>
        <div className="list_categories">
            <AddCategory/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
        </div>
        <NextPreview/>
        </div>
    )
}

export default ComposePortfolio
