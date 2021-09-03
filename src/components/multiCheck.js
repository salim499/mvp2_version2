// Import from react
import React from 'react'

// Import css files 
import '../css/multiCheck.css'

function MultiCheck(props) {

    // functions 
    const handleChosenItems = (event) =>{
        props.handleChosenItems(event.target.dataset.name, event.target.checked)
    }

    return (
        <div className="model-apply_constraints-body-actions-categories">
        {
        props.showSection&&
        <>
        <div className="model-apply_constraints-body-actions-categories-text">
        Categories
    </div>
    <div className="model-apply_constraints-body-actions-categories-item">
        <input type="checkbox" className="model-apply_constraints-body-actions-categories-item-input"
        data-name="Category1"
        onClick={handleChosenItems}>
        </input>
        <div className="model-apply_constraints-body-actions-categories-item-label">
            Category
        </div>
    </div>
    <div className="model-apply_constraints-body-actions-categories-item">
        <input type="checkbox" className="model-apply_constraints-body-actions-categories-item-input"
        data-name="Category2"
        onClick={handleChosenItems}>
        </input>
        <div className="model-apply_constraints-body-actions-categories-item-label">
            Category
        </div>
    </div>
    <div className="model-apply_constraints-body-actions-categories-item">
        <input type="checkbox" className="model-apply_constraints-body-actions-categories-item-input"
        data-name="Category3"
        onClick={handleChosenItems}>
        </input>
        <div className="model-apply_constraints-body-actions-categories-item-label">
            Category
        </div>
    </div>
    <div className="model-apply_constraints-body-actions-categories-item">
        <input type="checkbox" className="model-apply_constraints-body-actions-categories-item-input"
        data-name="Category4"
        onClick={handleChosenItems}>
        </input>
        <div className="model-apply_constraints-body-actions-categories-item-label">
            Category
        </div>
    </div>
    </>
        }
        </div>
    )
}

export default React.memo(MultiCheck)
