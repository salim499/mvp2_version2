// Import from react
import React from 'react'

// Import css files 
import '../css/multiCheck.css'

function MultiCheck() {
    return (
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
    )
}

export default MultiCheck
