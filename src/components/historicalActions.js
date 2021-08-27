// Import from react
import React from 'react'

// Import icons
import delete_factor from '../assets/icons/delete.svg'

// Import css files
import '../css/historicalActions.css'

function HistoricalActions() {
    return (
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
    )
}

export default HistoricalActions
