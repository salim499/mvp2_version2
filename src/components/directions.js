// Import from react
import React from 'react'

// Import icons 
import reset_network from '../assets/icons/reset_network.svg'
import bottom from '../assets/icons/bottom.svg'
import top from '../assets/icons/top.svg'
import left from '../assets/icons/left.svg'
import right from '../assets/icons/right.svg'

// Import css files 
import '../css/directions.css'

function ModelDirections() {
    return (
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
    )
}

export default ModelDirections
