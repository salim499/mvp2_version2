// Import from react
import React from 'react'

// Import css files 
import '../css/dateInterval.css'

// Import Icons
import Forward from '../assets/icons/forward.svg'

function DateInterval(props) {
    return (
        <div className="date_interval">
            <div className="date_interval-item">
                <label>From</label>
                {props.startDate?
                <p>{props.startDate}</p>
                :
                <p style={{color:'rgba(0,0,0,0.2)'}}>startDate</p>
                }
            </div>
            <div className="date_interval-icon">
                <img src={Forward}/>
            </div>
            <div className="date_interval-item">
                <label>To</label>
                {props.endDate?
                <p>{props.endDate}</p>
                :
                <p style={{color:'rgba(0,0,0,0.2)'}}>endDate</p>
                }
            </div>
        </div>
    )
}

export default DateInterval
