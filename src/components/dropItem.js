// Import from react
import React from 'react'

// Import css files 
import '../css/dropItem.css'

function dropItem() {
    return (
      <div className="item">
        <div className="item-label">
            ASSETS
        </div>
        <div className="item-factor">Asset 1</div>
        <div className="item-factor">Asset 2 </div>
      <div className="item-factor">Asset 3 </div>
    </div>
    )
}

export default dropItem
