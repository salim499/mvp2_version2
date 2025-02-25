// Import from react
import React from 'react'

// Import components
import CreatePortfolioNavbar from '../components/createPortfolioNavbar'
import PlotPortfolio from '../components/testChart2'
import BarPortfolio from '../components/verticalBar2'

// Import css files
import '../css/viewPortfolio.css'

// Import contexts
import { useNavBar } from "../contexts/navbar"


function ViewPortfolio() {

    const {navBarState, setNavBarState} = useNavBar()

    return (
        <div className={navBarState?"container-with-margin":"container-without-margin"}>
            <CreatePortfolioNavbar/>
            <div className="graphs_portfolio">
               <div className="graphs_portfolio-plot">
                    <PlotPortfolio/>
               </div>
               <div className="graphs_portfolio-bar">
                    <BarPortfolio/>
               </div>              
            </div>
        </div>
    )
}

export default ViewPortfolio
