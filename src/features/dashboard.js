import React from 'react'

// Import css files 
import '../css/dashboard.css'

// Import icons
import user_profile from '../assets/icons/user_profile.svg'
import add_portfolio from '../assets/icons/add_portfolio.svg'
import trash_portfolio from '../assets/icons/trash.svg'
import duplicate_portfolio_green from '../assets/icons/duplicate.svg'
import duplicate_portfolio_blue from '../assets/icons/duplicate_select.svg'

// Import components
import Graph_portfolio from '../components/testChart2'
import Circle_portfolio from '../components/Circle'
// Import contexts
import { useNavBar } from "../contexts/navbar"

function Dashboard() {

    const {navBarState, setNavBarState} = useNavBar()

    return (
        <div className={navBarState?"App":"App2"}>
            <div className="user_information">
                <div className="user_information-user_name">
                    Cheikh Ljama3
                </div>
                <div>
                    <img src={user_profile} />
                </div>
            </div>
            <div className="dashboard_header">
                <div className="dashboard_header-text">
                Hi John, Welcome back !<br/><br/>
                <div className="dashboard_header-label">dashboard</div>
                </div>
                <div>
                    <input type="text" placeholder="               search" className="dashboard_header-search"/>
                </div>
            </div>
            <div className="portfolios">
                <div className="portfolios-add_portfolio">
                    <div className="portfolios-add_portfolio-label">
                        New Portfolio
                    </div>
                    <div>
                        <img src={add_portfolio}/>
                    </div>
                </div>
                <div className="portfolios-item">
                    <div className="portfolios-item-label"
                    >
                        Portfolio 1 
                    </div>
                    <div className="portfolios-item-actions">
                        <div className="portfolios-item-actions-item1">

                        </div>
                        <div className="portfolios-item-actions-duplicate">
                            <img src={duplicate_portfolio_blue} />
                        </div>
                        <div className="portfolios-item-actions-delete">
                            <img src={trash_portfolio} />
                        </div>
                    </div>
                </div>
                <div className="portfolios-item">
                    <div className="portfolios-item-label"
                    style={{color:"#2EC4B6"}}>
                        Portfolio 2 
                    </div>
                    <div className="portfolios-item-actions">
                        <div className="portfolios-item-actions-item1"
                        style={{backgroundColor:"#2EC4B6"}}>

                        </div>
                        <div className="portfolios-item-actions-duplicate">
                            <img src={duplicate_portfolio_green} />
                        </div>
                        <div className="portfolios-item-actions-delete"
                        style={{backgroundColor:"#2EC4B6"}}>
                            <img src={trash_portfolio} />
                        </div>
                    </div>
                </div>
                <div className="portfolios-item">
                    <div className="portfolios-item-label"
                    style={{color:"#2EC4B6"}}>
                        Portfolio 3 
                    </div>
                    <div className="portfolios-item-actions">
                        <div className="portfolios-item-actions-item1"
                        style={{backgroundColor:"#2EC4B6"}}>

                        </div>
                        <div className="portfolios-item-actions-duplicate">
                            <img src={duplicate_portfolio_green} />
                        </div>
                        <div className="portfolios-item-actions-delete"
                        style={{backgroundColor:"#2EC4B6"}}>
                            <img src={trash_portfolio} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-values">
                <div className="portfolio-values-graph">
                    <Graph_portfolio/>
                    <div className="rebalance">
                        <div className="rebalance_item">
                            <div className="rebalance_item-button">
                               <div className="rebalance_item-button-text">
                                   t0 Before Rebalance
                                   </div>
                            </div>
                            <Circle_portfolio className="rebalance_item-graph"/>
                        </div>
                        <div className="rebalance_item">
                            <div className="rebalance_item-button">
                                <div className="rebalance_item-button-text">
                                   t0 After Rebalance
                                </div>
                            </div>
                            <Circle_portfolio className="rebalance_item-graph"/>
                        </div>
                        <div className="rebalance_item">
                           <div className="rebalance_item-button">
                                <div className="rebalance_item-button-text">
                                   tf
                                </div>
                            </div>
                            <Circle_portfolio className="rebalance_item-graph"/>
                        </div>
                    </div>
                </div>
                <div className="portfolio-values-details">
                    <div className="portfolio-values-details-item">
                        <div className="portfolio-values-details-item-label">
                            Initial value
                        </div>
                        <div className="portfolio-values-details-item-value">
                            100 $
                        </div>
                    </div>
                    <div className="portfolio-values-details-item">
                    <div className="portfolio-values-details-item-label">
                        Final value
                    </div>
                    <div className="portfolio-values-details-item-value">
                        150 $
                    </div>
                    </div>
                    <div className="portfolio-values-details-item">
                    <div className="portfolio-values-details-item-label">
                        Confidence Level
                    </div>
                    <div className="portfolio-values-details-item-value">
                        0.99
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
