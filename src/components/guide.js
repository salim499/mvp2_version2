// Import from react
import React from 'react'

// Import icons 
import star from '../assets/icons/star.svg'
import delete_factor from '../assets/icons/delete.svg'
import factor from '../assets/icons/factor.svg'
import positive_relation from '../assets/icons/positive_relation.svg'
import negative_relation from '../assets/icons/negative_relation.svg'

// Import css files
import '../css/guide.css'

function guide() {
    return (
        <div className="model-see_constraints-guide">
        <div className="model-see_constraints-guide-first_section">
        <div className="model-see_constraints-historical_actions-exit">
            <img src={delete_factor} className="model-see_constraints-historical_actions-exit-icon"/>
        </div>
        <div className="model-see_constraints-historical_actions-title"> 
            <div className="model-see_constraints-historical_actions-title-text">
                Causal Model Guide
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
    )
}

export default guide
