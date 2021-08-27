// Import from react
import React from 'react'

// Import icons 
import filter_top from '../assets/icons/filter_top.svg'

// Import css files 
import '../css/filterHeader.css'

function FilterHeader() {
    return (
        <div className="model-apply_constraints-body-actions-filters">
        <div className="model-apply_constraints-body-actions-filters-text">
            filters
        </div>
        <div className="model-apply_constraints-body-actions-filters-icon">
            <img src={filter_top}/>
        </div>
        </div>
    )
}

export default FilterHeader
