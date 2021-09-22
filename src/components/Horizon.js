// Import from react
import React, {useState} from 'react'

const Horizon =({horizon, index, changeHorizon})=>{


    const handleChangeDuration = (event)=>{
        changeHorizon(index, {duration:event.target.value, timeUnit:horizon.timeUnit})
    }
    const handleChangeTimeUnit = (event)=>{
        changeHorizon(index, {duration:horizon.duration, timeUnit:event.target.value})
    }
    

    return (
    <div className="one-horizon">
        <div>Horizon {index+1}</div>
        <input
        type="number"
        min="1"
        max="100"
        value={horizon.duration}
        onChange={handleChangeDuration}
        />
        <select value={horizon.timeUnit} onChange={handleChangeTimeUnit}>
            <option value="hours" >Hours</option>
            <option value="days">Days</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
        </select>
        </div>
        )
    }

export default Horizon;