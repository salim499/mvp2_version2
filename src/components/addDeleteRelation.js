// Import from react
import React from 'react'

// Import icons
import FromTo from '../assets/icons/fromTo.svg'
import DeleteRelation from '../assets/icons/delete.svg'

// Import css files
import '../css/addDeleteRelation.css'


function AddDeleteRelation(props) {
    return (
        <div className="model-see_constraints-relations">
            <div className="model-see_constraints-relations-title">
                Select factors to {props.action} relation
            </div>
            <div  className="model-see_constraints-relations-fromTo">
              <div className="model-see_constraints-relations-fromTo-item" style={{
                  marginBottom:'30px'
              }}>
                <div className="model-see_constraints-relations-fromTo-text">
                    From 
                </div>
                <select className="model-see_constraints-relations-fromTo-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
              </div>
              <div className="model-see_constraints-relations-fromTo-item">
                <div className="model-see_constraints-relations-fromTo-text">
                    To
                </div>
                <select className="model-see_constraints-relations-fromTo-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
              </div>
            </div>
            <div className="model-see_constraints-relations-relations">
                <div className="model-see_constraints-relations-relations-item">
                    <div className="model-see_constraints-relations-relations-item-text">
                        Tobacco 
                    </div>
                    <div className="model-see_constraints-relations-relations-item-icon">
                        <img src={FromTo}  />
                    </div>
                    <div className="model-see_constraints-relations-relations-item-text">
                        Animal Testing 
                   </div>
                   <div className="model-see_constraints-relations-relations-item-icon">
                        <img src={DeleteRelation}/>
                   </div>
                </div> 
                <div className="model-see_constraints-relations-relations-item">
                    <div className="model-see_constraints-relations-relations-item-text">
                        Tobacco 
                    </div>
                    <div className="model-see_constraints-relations-relations-item-icon">
                        <img src={FromTo}  />
                    </div>
                    <div className="model-see_constraints-relations-relations-item-text">
                        Animal Testing 
                   </div>
                   <div className="model-see_constraints-relations-relations-item-icon">
                        <img src={DeleteRelation}/>
                   </div>
                </div> 
            </div>
        </div>
    )
}

export default AddDeleteRelation
