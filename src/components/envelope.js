// Import from react
import React from 'react'

// Import css files 
import '../css/envelope.css'

function envelope(props) {
    return (
        <div className="envelope-container">
            <div className="envelope-container-text"> 
                {props.envelopeText}
            </div>
        </div>
    )
}

export default envelope
