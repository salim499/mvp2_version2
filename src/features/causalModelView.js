// Import from react
import React, {useEffect, useCallback, useState} from 'react'

// Import from libraries
import {get} from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

// Import css files
import '../css/causalModelView.css'

// Import components
import CreatePortfolioNavbar from '../components/createPortfolioNavbar'
import Timeline from '../components/timeline'
import Network from '../components/network'
import ModelActions from '../components/actions'
import ModelDirections from '../components/directions'
import ModelFilterSliders from '../components/slidersFilter'
import ModelFilterCategories from '../components/multiCheck'
import FilterHeader from '../components/filterHeader'
import HistoricalActions from '../components/historicalActions'
import CausalModelGuide from '../components/guide'
import Orders from '../components/orders'
import ModelHeaderFilter from '../components/modelFilter'
import ModelHeaderConstraints from '../components/modelConstraints'
import NextPreview from '../components/nextPreview'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants
const timelineLevel=4

function CausalModelView() {

    // useLocations 
    const location = useLocation()

    // useHistory 
    const history = useHistory()

    // useContext
    const {navBarState} = useNavBar()

    // useState
    const [selectedFactors, setSelectedFactors] = useState([])
    const [selectedRelations, setSelectedRelations] = useState([])
    const [currentSelectedAction, setCurrentSelectedAction] = useState(null)
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")

    // preview button
    const handlePreview = useCallback (()=>{
        history.push({
            pathname : '/chose-date-window',
        }) 
    },[])

    // next button 
    const handleNext = useCallback (()=>{
        history.push({
            pathname : '/view-portfolio',
        }) 
    },[])

    // add factor to selected factors state
    const handleSelectFactor = useCallback ((factor)=>{
        setSelectedFactors(selectedFactors=> [...selectedFactors, factor])
    },[selectedFactors])

    // add relation to selected relations state
    const handleSelectRelation = useCallback ((relation)=>{
        setSelectedRelations(selectedRelations=> [...selectedRelations, relation])
    },[selectedRelations])

    // save the current selected action from model model actions
    const handleSelectAction = useCallback ((action)=>{
        console.log(action)
        setCurrentSelectedAction(action)
    },[])

    // useEffect
/*    useEffect(async()=>{
        console.log(location.state)
      try {  
        const res= await get(`${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}`,
        {
            headers:{
                token: localStorage.getItem('token')
            }
        })
        console.log(res)
        console.log(res.data)
     }
     catch (e) {
         console.log(e)
     }
    },[])*/

    return (
        <div className={navBarState?"App":"App2"}>
            {
        console.log(selectedFactors),
        console.log(selectedRelations)}
            <Timeline timelineLevel={timelineLevel}/>
            <CreatePortfolioNavbar
            width='100%'
            />
            <div className="model-constraints">
            <div className="model-apply_constraints">
                <ModelHeaderFilter/>
                <div className="model-apply_constraints-body">
                <div className="model-apply_constraints-body-actions">
                    <ModelActions
                    handleSelectAction={handleSelectAction}/>
                    <FilterHeader/>
                    <ModelFilterCategories/>
                    <ModelFilterSliders/>
                    <ModelDirections/>
                </div>
                    <div className="model-apply_constraints-body-graph">
                        <ModelHeaderConstraints/>
                        <div className="model-apply_constraints-body-graph-network-header-item">
                            <Network
                            handleClickNode={handleSelectFactor}
                            handleClickEdge={handleSelectRelation}
                            />
                         </div>
                    </div>
                </div>
            </div>
            <div className="model-see_constraints">
                <Orders/>
                <HistoricalActions/>
                <CausalModelGuide/>
            </div>
            </div>
            <NextPreview
            handleNext={handleNext}
            handlePreview={handlePreview}
            nextVisibility={nextVisibility}
            previewVisibility={previewVisibility} 
            />
        </div>
    )
}

export default CausalModelView
