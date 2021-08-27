// Import from react
import React from 'react'

// Import css files
import '../css/causalModelView.css'

// Import icons
import star from '../assets/icons/star.svg'
import reset_network from '../assets/icons/reset_network.svg'
import filter_bottom from '../assets/icons/filter_bottom.svg'
import delete_factor from '../assets/icons/delete.svg'
import factor from '../assets/icons/factor.svg'
import positive_relation from '../assets/icons/positive_relation.svg'
import negative_relation from '../assets/icons/negative_relation.svg'

// Import components
import CreatePortfolioNavbar from '../components/createPortfolioNavbar'
import Timeline from '../components/timeline'
import Network from '../components/network'
import ModelActions from '../components/modelActions'

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
                <div className="model-apply_constraints-header">
                  <div className="model-apply_constraints-header-content">
                    <div className="model-apply_constraints-header-content-text">
                        analysis
                    </div>
                    <div className="model-apply_constraints-header-content-text-action">
                        guide
                    </div>
                    <div className="model-apply_constraints-header-content-text-action">
                        constraints
                    </div>
                    <div className="model-apply_constraints-header-content-icon">
                        <img src={reset_network} />
                    </div>
                  </div>
                </div>
                <div className="model-apply_constraints-body">
                    <ModelActions/>
                    <div className="model-apply_constraints-body-graph">
                        <div className="model-apply_constraints-body-graph-header">
                            <div className="model-apply_constraints-body-graph-header-item">
                                <div className="model-apply_constraints-body-graph-header-item-text">
                                    What is 
                                </div>
                                <div className="model-apply_constraints-body-graph-header-item-icon">
                                    <img src={filter_bottom}/>
                                </div>
                            </div>
                            <div className="model-apply_constraints-body-graph-header-item">
                                <div className="model-apply_constraints-body-graph-header-item-text">
                                    The path between
                                </div>
                                <div className="model-apply_constraints-body-graph-header-item-icon">
                                    <img src={filter_bottom}/>
                                </div>
                            </div>
                            <div className="model-apply_constraints-body-graph-header-item">
                                <div className="model-apply_constraints-body-graph-header-item-text">
                                    Factor
                                </div>
                                <div className="model-apply_constraints-body-graph-header-item-icon">
                                    <img src={filter_bottom}/>
                                </div>
                            </div>
                            <div className="model-apply_constraints-body-graph-header-item">
                                <div className="model-apply_constraints-body-graph-header-item-text">
                                    And
                                </div>
                                <div className="model-apply_constraints-body-graph-header-item-icon">
                                    <img src={filter_bottom}/>
                                </div>
                            </div>
                            <div className="model-apply_constraints-body-graph-header-item">
                                <div className="model-apply_constraints-body-graph-header-item-text">
                                    Factor
                                </div>
                                <div className="model-apply_constraints-body-graph-header-item-icon">
                                    <img src={filter_bottom}/>
                                </div>
                            </div>
                        </div>
                        <div className="model-apply_constraints-body-graph-network-header-item">
                            <Network/>
                         </div>
                    </div>
                </div>
            </div>
            <div className="model-see_constraints">
                <div className="model-see_constraints-orders">
                        <select className="model-see_constraints-orders-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <div className="model-see_constraints-orders-items">                   
                            <div className="model-see_constraints-orders-items-item">
                                <div className="model-see_constraints-orders-items-item-label">
                                    <div className="model-see_constraints-orders-items-item-label-text">
                                        Tobacco
                                    </div>
                                </div>
                                <div className="model-see_constraints-orders-items-item-inputs">
                                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                                </div>
                            </div> 
                            <div className="model-see_constraints-orders-items-item">
                                <div className="model-see_constraints-orders-items-item-label">
                                    <div className="model-see_constraints-orders-items-item-label-text">
                                        Tobacco
                                    </div>
                                </div>
                                <div className="model-see_constraints-orders-items-item-inputs">
                                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                                </div>
                            </div>  
                            <div className="model-see_constraints-orders-items-item">
                                <div className="model-see_constraints-orders-items-item-label">
                                    <div className="model-see_constraints-orders-items-item-label-text">
                                        Tobacco
                                    </div>
                                </div>
                                <div className="model-see_constraints-orders-items-item-inputs">
                                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                                </div>
                            </div>  
                            <div className="model-see_constraints-orders-items-item">
                                <div className="model-see_constraints-orders-items-item-label">
                                    <div className="model-see_constraints-orders-items-item-label-text">
                                        Tobacco
                                    </div>
                                </div>
                                <div className="model-see_constraints-orders-items-item-inputs">
                                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                                </div>
                            </div>  
                            <div className="model-see_constraints-orders-items-item">
                                <div className="model-see_constraints-orders-items-item-label">
                                    <div className="model-see_constraints-orders-items-item-label-text">
                                        Tobacco
                                    </div>
                                </div>
                                <div className="model-see_constraints-orders-items-item-inputs">
                                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                                </div>
                            </div>                  
                        </div>
                    </div>
                <div className="model-see_constraints-historical_actions">
                    <div className="model-see_constraints-historical_actions-exit">
                        <img src={delete_factor} className="model-see_constraints-historical_actions-exit-icon"/>
                    </div>
                    <div className="model-see_constraints-historical_actions-title"> 
                        <div className="model-see_constraints-historical_actions-title-text">
                            Historical Actions
                        </div>
                    </div>
                    <ul className="model-see_constraints-historical_actions-items">
                        <li className="model-see_constraints-historical_actions-items-item">Tobacco is setted to order 2</li>
                        <li className="model-see_constraints-historical_actions-items-item">New relation is added between Tobacco and Animal Testing</li>
                    </ul>
                </div>
                <div className="model-see_constraints-guide">
                    <div className="model-see_constraints-guide-first_section">
                    <div className="model-see_constraints-historical_actions-exit">
                        <img src={delete_factor} className="model-see_constraints-historical_actions-exit-icon"/>
                    </div>
                    <div className="model-see_constraints-historical_actions-title"> 
                        <div className="model-see_constraints-historical_actions-title-text">
                            Historical Actions
                        </div>
                    </div>
                    <ul className="model-see_constraints-historical_actions-items">
                        <li className="model-see_constraints-historical_actions-items-item">Tobacco is setted to order 2</li>
                        <li className="model-see_constraints-historical_actions-items-item">New relation is added between Tobacco and Animal Testing</li>
                    </ul>
                    </div>
                    <div className="model-see_constraints-guide-second_section">
                        <div className="model-see_constraints-guide-second_section-item">
                            <img src={star} className="model-see_constraints-guide-second_section-item-icon" />
                             <div className="model-see_constraints-guide-second_section-item-text">
                                Factor designated as Target
                             </div>
                        </div>
                        <div className="model-see_constraints-guide-second_section-item">
                            <img src={factor} className="model-see_constraints-guide-second_section-item-icon" />
                            <div className="model-see_constraints-guide-second_section-item-text">
                                Factor designated as Target
                            </div>                      
                        </div>
                        <div className="model-see_constraints-guide-second_section-item">
                            <img src={factor} className="model-see_constraints-guide-second_section-item-icon" 
                            style={{height:'90%'}}
                            />
                            <div className="model-see_constraints-guide-second_section-item-text">
                                Factor designated as Target
                            </div> 
                        </div>
                        <div className="model-see_constraints-guide-second_section-item">
                            <img src={positive_relation} className="model-see_constraints-guide-second_section-item-icon" 
                            style={{height:'50%'}}
                            />
                            <div className="model-see_constraints-guide-second_section-item-text">
                                Factor designated as Target
                            </div> 
                        </div>
                        <div className="model-see_constraints-guide-second_section-item">
                            <img src={negative_relation} className="model-see_constraints-guide-second_section-item-icon" 
                            style={{height:'50%'}}
                            />
                            <div className="model-see_constraints-guide-second_section-item-text">
                                Factor designated as Target
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CausalModelView
