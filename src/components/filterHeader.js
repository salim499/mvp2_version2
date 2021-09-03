// Import from react
import React, {useState} from 'react'

// Import icons 
import filter_top from '../assets/icons/filter_top.svg'
import filter_bottom from '../assets/icons/filter_bottom.svg'

// Import css files 
import '../css/filterHeader.css'

function FilterHeader(props) {

    // useState 
    const [currentFilterState, setCurrentFilterState] = useState(true)

    const handleChangeFilterState = () =>{
        setCurrentFilterState(!currentFilterState)
        props.currentFilterState(!currentFilterState)
    }

    return (
        <div className="model-apply_constraints-body-actions-filters"
        onClick={handleChangeFilterState}>
        <div className="model-apply_constraints-body-actions-filters-text">
            filters
        </div>
        <div className="model-apply_constraints-body-actions-filters-icon">
            {
                currentFilterState&&
                <img src={filter_top} />
            }
            {
                !currentFilterState&&
                <img src={filter_bottom} />                
            }
        </div>
        </div>
    )
}

export default React.memo(FilterHeader)
