// Import from react
import React from 'react'


function deletedItems(props) {

    const handleRestartFactor = (factorName) => {
        props.handleRestartFactor(factorName)
    }

    return (
        <div className="edit-model-container">
            <div className="deleted_items_container-title">
                Eliminated factors
            </div> 
            <div className="deleted_items_container-items">
            {props.factorsDeleted.map((factor)=>
                <div className="deleted_items_container-items-item"
                onClick={()=>handleRestartFactor(factor.name)}>
                {factor.name}
                </div>
            )}  
            </div>           
        </div>
    )
}

export default React.memo(deletedItems)
