// Import from react 
import React from 'react'

// Import css files 
import '../css/addItem.css'

// Import icons
import new_category from '../assets/icons/new_category.svg'

function AddItem(props) {
    return (
      console.log("RENDER"),
      <div className="new_item" onClick={()=>props.handleAddItem()}>
        <div className="new_item-label">
            New category
        </div>
        <img src={new_category} />
      </div>
    )
}

export default React.memo(AddItem)
