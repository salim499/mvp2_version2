// Import from react
import React from 'react'

// Import icons
import filter_bottom from '../assets/icons/filter_bottom.svg'

// Import css files 
import '../css/modelConstraints.css'

function ModelConstraints() {
    return (
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
    )
}

export default ModelConstraints
