// Import from react
import React from 'react'

// Import icons
import zoom_in from '../assets/icons/zoom_in.svg'
import zoom_out from '../assets/icons/zoom_out.svg'
import trash_factor from '../assets/icons/trash_factor.svg'
import trash_relation from '../assets/icons/trash_relation.svg'
import filterFactor from '../assets/icons/filterFactor.svg'
import add_relation from '../assets/icons/add_relation.svg'
import path from '../assets/icons/path.svg'
import star from '../assets/icons/star.svg'

// Import css files 
import '../css/actions.css'

function  ModelActions(props) {

    // functions
    const handleSelectAction = (event) => {
        if(event.target.dataset.name){
            props.handleSelectAction(event.target.dataset.name)
        }
    }

    return (
        <div className="model-apply_constraints-body-actions-icons" onClick={handleSelectAction}>
            <div className="model-apply_constraints-body-actions-icons-item"
             data-name="zoomIn">
                <img src={zoom_in} data-name="zoomIn"/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item"
            data-name="zoomOut">
                <img src={zoom_out} data-name="zoomOut"/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item"
            data-name="deleteFactor">
                <img src={trash_factor} data-name="deleteFactor"/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item"
            data-name="deleteRelation">
                <img src={trash_relation} data-name="deleteRelation"/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item"
            data-name="filterFactor">
                <img src={filterFactor} data-name="filterFactor"/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item"
            data-name="addRelation">
                <img src={add_relation} data-name="addRelation"/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item"
            data-name="choseAsset">
                <img src={star} data-name="choseAsset"/>
            </div>
            <div className="model-apply_constraints-body-actions-icons-item"
            data-name="orderFactor">
                <img src={path} data-name="orderFactor"/>
            </div>
        </div>
    )
}

export default ModelActions
