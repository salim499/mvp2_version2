// Import from react
import React from 'react'

// Import components
import Timeline from '../components/timeline'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// constants
const timelineLevel=3

const ChooseTarget = () => {
    // useContext
    const {navBarState} = useNavBar();

    return (
        <>
      <div className={navBarState?"container-with-margin ":"container-without-margin"}>
        <Timeline timelineLevel={timelineLevel}/>
       </div>
    </>
    )
}

export default ChooseTarget;