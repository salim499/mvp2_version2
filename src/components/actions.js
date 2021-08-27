// Import from react
import React from 'react'

// Import icons
import zoom_in from '../assets/icons/zoom_in.svg'
import zoom_out from '../assets/icons/zoom_out.svg'
import trash_factor from '../assets/icons/trash_factor.svg'
import trash_relation from '../assets/icons/trash_relation.svg'
import order from '../assets/icons/order.svg'
import add_relation from '../assets/icons/add_relation.svg'
import path from '../assets/icons/path.svg'
import star from '../assets/icons/star.svg'

// Import css files 
import '../css/actions.css'

function  ModelActions() {
    return (
        <div className="model-apply_constraints-body-actions-icons">
            <div className="model-apply_constraints-body-actions-icons-item">
                <img src={zoom_in}/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item">
                <img src={zoom_out}/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item">
                <img src={trash_factor}/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item">
                <img src={trash_relation}/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item">
                <img src={order}/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item">
                <img src={add_relation}/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item">
                <img src={star}/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item">
                <img src={path}/>
            </div>
        </div>
    )
}

export default ModelActions
