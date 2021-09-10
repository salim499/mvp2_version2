// Import from react
import React from 'react'

// Import Icons
import Trash from '../assets/icons/delete.svg'

// Import css files 
import '../css/dropItem.css'

function DropItem(props) {

    return (
      <div className="item" 
      ref={props.provided.innerRef} 
      {...props.provided.draggableProps} 
      {...props.provided.dragHandleProps}
      >
        <div style={{backgroundColor:props.backgroundP, minHeight: '147px'}}>
        <div className="item-header">
        <div className="item-header-label">
            {props.itemsCategory}
        </div>
        <div className="item-header-icon" onClick={()=>props.handleDeleteItem(props.item.name)}>
            <img src={Trash} />
        </div>
        </div>
        {
          props.items.map((item, index) => (
            <div className="item-factor" style={{
              backgroundColor:props.color
            }}>{item.name}</div>
          ))
        }
    </div>
    </div>
    )
}

export default DropItem
