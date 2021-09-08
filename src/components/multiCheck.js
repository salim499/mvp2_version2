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
        {props.multiCheckName}
    </div>
    {
    props.items.map((item, index)=>(
      <div key={item} className="model-apply_constraints-body-actions-categories-item">
        <input type="checkbox" defaultChecked={true} className="model-apply_constraints-body-actions-categories-item-input"
        data-name={item}
        onClick={handleChosenItems}>
        </input>
        <div className="model-apply_constraints-body-actions-categories-item-label">
            {item}
        </div>
      </div>
    ))
    }
    </>
        }
        </div>
    )
}

export default React.memo(MultiCheck)
