// Import from react
import React from 'react'

// Import icons 
import delete_factor from '../assets/icons/delete.svg'

// Import css files 
import '../css/orders.css'

function FactorSelection() {
    return (
        <div className="model-see_constraints-orders">
        <select className="model-see_constraints-orders-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <div className="model-see_constraints-orders-items">                   
            <div className="model-see_constraints-orders-items-item">
                <div className="model-see_constraints-orders-items-item-label">
                    <div className="model-see_constraints-orders-items-item-label-text">
                        Tobacco
                    </div>
                </div>
                <div className="model-see_constraints-orders-items-item-inputs">
                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                </div>
            </div> 
            <div className="model-see_constraints-orders-items-item">
                <div className="model-see_constraints-orders-items-item-label">
                    <div className="model-see_constraints-orders-items-item-label-text">
                        Tobacco
                    </div>
                </div>
                <div className="model-see_constraints-orders-items-item-inputs">
                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                </div>
            </div>  
            <div className="model-see_constraints-orders-items-item">
                <div className="model-see_constraints-orders-items-item-label">
                    <div className="model-see_constraints-orders-items-item-label-text">
                        Tobacco
                    </div>
                </div>
                <div className="model-see_constraints-orders-items-item-inputs">
                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                </div>
            </div>  
            <div className="model-see_constraints-orders-items-item">
                <div className="model-see_constraints-orders-items-item-label">
                    <div className="model-see_constraints-orders-items-item-label-text">
                        Tobacco
                    </div>
                </div>
                <div className="model-see_constraints-orders-items-item-inputs">
                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                </div>
            </div>  
            <div className="model-see_constraints-orders-items-item">
                <div className="model-see_constraints-orders-items-item-label">
                    <div className="model-see_constraints-orders-items-item-label-text">
                        Tobacco
                    </div>
                </div>
                <div className="model-see_constraints-orders-items-item-inputs">
                    <input type="number" className="model-see_constraints-orders-items-item-inputs-input" />
                    <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"/>
                </div>
            </div>                  
        </div>
</div>
    )
}

export default FactorSelection
