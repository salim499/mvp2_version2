// Import from react
import React from 'react'


function deletedItems() {
    return (
        <div className="deleted_items_container">
            <div className="deleted_items_container-title">
                Eliminated factors
            </div>
            <div className="deleted_items_container-items">
                <div className="deleted_items_container-items-item">
                    Commo 1V
                </div>
                <div className="deleted_items_container-items-item"
                style={{backgroundColor:'#081C4D'}}>
                    Commo 2V
                </div>
                <div className="deleted_items_container-items-item">
                    Commo 3V
                </div>
                <div className="deleted_items_container-items-item"
                style={{backgroundColor:'#081C4D'}}>
                    Commo 4V
                </div>
            </div>           
        </div>
    )
}

export default deletedItems
