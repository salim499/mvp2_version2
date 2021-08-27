// Import from react
import React from 'react'

// Import css files 
import '../css/slidersFilter.css'

function SliderFilter() {
    return (
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
    )
}

export default SliderFilter
