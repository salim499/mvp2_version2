// Import from react
import React, {useState} from 'react'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Import components
import Timeline from '../components/Timeline'

// constants
const timelineLevel=4

const Predict = () => {
      // useContext
      const {navBarState} = useNavBar();
    return(
        <>
            <div className={navBarState?"container-with-margin ":"container-without-margin"}>
                <Timeline timelineLevel={timelineLevel}/>
                <div className="predict-container">
                </div>
            </div>
        </>
    )
}

export default Predict;