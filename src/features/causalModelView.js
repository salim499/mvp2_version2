// Import from react
import React from 'react'

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

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants
const timelineLevel=4

function CausalModelView() {

    const {navBarState, setNavBarState} = useNavBar()

    return (
        <div className={navBarState?"App":"App2"}>
            <Timeline timelineLevel={timelineLevel}/>
            <CreatePortfolioNavbar
            width='100%'
            />
            <div className="model-constraints">
            <div className="model-apply_constraints">
                <ModelHeaderFilter/>
                <div className="model-apply_constraints-body">
                <div className="model-apply_constraints-body-actions">
                    <ModelActions/>
                    <FilterHeader/>
                    <ModelFilterCategories/>
                    <ModelFilterSliders/>
                    <ModelDirections/>
                </div>
                    <div className="model-apply_constraints-body-graph">
                        <ModelHeaderConstraints/>
                        <div className="model-apply_constraints-body-graph-network-header-item">
                            <Network/>
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
        </div>
    )
}

export default CausalModelView
