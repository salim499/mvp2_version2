// Import from react
import React from 'react'

// Import css files 
import '../css/slidersFilter.css'

function SliderFilter(props) {

    // functions 
    const handleFirstSliderChangeValue = (event) => {
        props.handleFirstSliderChangeValue(parseFloat(event.target.value))
    }
    const handleSecondSliderChangeValue = (event) => {
        props.handleSecondSliderChangeValue(parseFloat(event.target.value))
    }

    return (
        <div className="model-apply_constraints-body-actions-entropies">
            <div className="model-apply_constraints-body-actions-entropies-factor">
            <div className="model-apply_constraints-body-actions-entropies-factor-label">
                Factor Entropy
            </div>
            <input type="range" className="model-apply_constraints-body-actions-entropies-factor-input"
            max={props.maxFirstSliderValue!=null&&props.maxFirstSliderValue}
            step={0.1}
            defaultValue={0}
            onChange={handleFirstSliderChangeValue}>
            </input>
            </div>
            <div className="model-apply_constraints-body-actions-entropies-relation">
            <div className="model-apply_constraints-body-actions-entropies-relation-label">
                Relation Entropy
            </div>
            <input type="range" className="model-apply_constraints-body-actions-entropies-relation-input"
            max={props.maxSecondSliderValue!=null&&props.maxSecondSliderValue}
            step={0.1}
            defaultValue={0}
            onChange={handleSecondSliderChangeValue}>
            </input>
            </div>
        </div>
    )
}

export default React.memo(SliderFilter)
