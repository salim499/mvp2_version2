// Import from react 
import React from 'react'

// Import from libraries
import { Droppable, Draggable } from 'react-beautiful-dnd'

// Import css files
import '../css/dragSection.css'

function dragSection(props) {

    return (
    <Droppable droppableId="factors">
    {(provided) => (
    <div className="list_items" {...provided.droppableProps} ref={provided.innerRef}>
    {
         props.factors.map((factor, index)=>(
            <Draggable key={factor.name} draggableId={factor.name} index={index}>
            {(provided) => (
                <div className="list_items-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="list_items-item-text">
                        {factor.name}
                    </div>
                </div> 
            )}
            </Draggable>
         ))
    }    
    {provided.placeholder}
    </div> 
    )}
     </Droppable>
    )
}

export default dragSection
