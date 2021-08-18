// Import from react
import React from 'react'

// Import css files
import '../css/causalModelView.css'

// Import icons
import zoom_in from '../assets/icons/zoom_in.svg'
import zoom_out from '../assets/icons/zoom_out.svg'
import trash_factor from '../assets/icons/trash_factor.svg'
import trash_relation from '../assets/icons/trash_relation.svg'
import order from '../assets/icons/order.svg'
import add_relation from '../assets/icons/add_relation.svg'
import star from '../assets/icons/star.svg'
import path from '../assets/icons/path.svg'
import filter_top from '../assets/icons/filter_top.svg'
import bottom from '../assets/icons/bottom.svg'
import top from '../assets/icons/top.svg'
import left from '../assets/icons/left.svg'
import right from '../assets/icons/right.svg'
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

// Import contexts
import { useNavBar } from "../contexts/navbar"

function CausalModelView() {

    const {navBarState, setNavBarState} = useNavBar()

    return (
        <div className={navBarState?"App":"App2"}>
            <Timeline/>
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
                    <div className="model-apply_constraints-body-actions">
                        <div className="model-apply_constraints-body-actions-icons">
                            <div className="model-apply_constraints-body-actions-icons-item">
                                <img src={zoom_in}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-icons-item">
                                <img src={zoom_out}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-icons-item">
                                <img src={trash_factor}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-icons-item">
                                <img src={trash_relation}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-icons-item">
                                <img src={order}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-icons-item">
                                <img src={add_relation}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-icons-item">
                                <img src={star}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-icons-item">
                                <img src={path}/>
                            </div>
                        </div>
                        <div className="model-apply_constraints-body-actions-filters">
                        <div className="model-apply_constraints-body-actions-filters-text">
                            filters
                        </div>
                        <div className="model-apply_constraints-body-actions-filters-icon">
                            <img src={filter_top}/>
                        </div>
                        </div>
                        <div className="model-apply_constraints-body-actions-categories">
                            <div className="model-apply_constraints-body-actions-categories-text">
                                Categories
                            </div>
                            <div className="model-apply_constraints-body-actions-categories-item">
                                <input type="checkbox" className="model-apply_constraints-body-actions-categories-item-input">
                                </input>
                                <div className="model-apply_constraints-body-actions-categories-item-label">
                                    Category
                                </div>
                            </div>
                            <div className="model-apply_constraints-body-actions-categories-item">
                                <input type="checkbox" className="model-apply_constraints-body-actions-categories-item-input">
                                </input>
                                <div className="model-apply_constraints-body-actions-categories-item-label">
                                    Category
                                </div>
                            </div>
                            <div className="model-apply_constraints-body-actions-categories-item">
                                <input type="checkbox" className="model-apply_constraints-body-actions-categories-item-input">
                                </input>
                                <div className="model-apply_constraints-body-actions-categories-item-label">
                                    Category
                                </div>
                            </div>
                            <div className="model-apply_constraints-body-actions-categories-item">
                                <input type="checkbox" className="model-apply_constraints-body-actions-categories-item-input">
                                </input>
                                <div className="model-apply_constraints-body-actions-categories-item-label">
                                    Category
                                </div>
                            </div>
                        </div>
                        <div className="model-apply_constraints-body-actions-entropies">
                            <div className="model-apply_constraints-body-actions-entropies-factor">
                            <div className="model-apply_constraints-body-actions-entropies-factor-label">
                                Factor Entropy
                            </div>
                            <input type="range" className="model-apply_constraints-body-actions-entropies-factor-input">
                            </input>
                            </div>
                            <div className="model-apply_constraints-body-actions-entropies-relation">
                            <div className="model-apply_constraints-body-actions-entropies-relation-label">
                                Relation Entropy
                            </div>
                            <input type="range" className="model-apply_constraints-body-actions-entropies-relation-input">
                            </input>
                            </div>
                        </div>
                        <div className="model-apply_constraints-body-actions-directional_keys">
                            <div className="model-apply_constraints-body-actions-directional_keys-item"></div>
                            <div className="model-apply_constraints-body-actions-directional_keys-item">
                                <img src={top}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-directional_keys-item"></div>
                            <div className="model-apply_constraints-body-actions-directional_keys-item">
                                <img src={left}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-directional_keys-item">
                                <img src={reset_network}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-directional_keys-item">
                                <img src={right}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-directional_keys-item"></div>
                            <div className="model-apply_constraints-body-actions-directional_keys-item">
                                <img src={bottom}/>
                            </div>
                            <div className="model-apply_constraints-body-actions-directional_keys-item"></div>
                        </div>
                    </div>
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
