// Import from react
import React from 'react'

// Import icons 
import reset_network from '../assets/icons/reset_network.svg'

// Import css files 
import '../css/modelFilter.css'

function ModelFilter() {
    return (
        <div className="model-apply_constraints-header">
        <div className="model-apply_constraints-header-content">
          <div className="model-apply_constraints-header-content-text">
              analysis
          </div>
          <div className="model-apply_constraints-header-content-text-action">
              guide
          </div>
          <div className="model-apply_constraints-header-content-text-action">
              constraints
          </div>
          <div className="model-apply_constraints-header-content-icon">
              <img src={reset_network} />
          </div>
        </div>
      </div>
    )
}

export default ModelFilter
