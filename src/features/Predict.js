// Import from react
import React, {useState, useCallback} from 'react'

// Import from libraries
import { useHistory } from 'react-router-dom'

// Import components
import Timeline from '../components/timeline'
import NextPreview from '../components/nextPreview'

// Import Icons
import arrowUp from '../assets/icons/arrowUp.svg'
import arrowDown from '../assets/icons/arrowDown.svg'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// constants
const timelineLevel=4

const Predict = () => {

    // useHistory
    const history = useHistory()

    // useContext
    const {navBarState} = useNavBar()

    // useState
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")

    // useCallback
    const handlePreview = useCallback(()=>{
        history.push({
            pathname : '/choose-target'
        })      
    },[]) 


    return(
    <div className={navBarState?"container-with-margin ":"container-without-margin"}>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="predict-container">
            <div className="edit-model-container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
                <span>Datasets/</span><span style={{color:'#c4c4c4'}}>"dataset.name"</span>
            </div>
            <div>
                <span>From</span><span style={{color:'#c4c4c4'}}>"11/09/2005"</span><span>to</span><span style={{color:'#c4c4c4'}}>"11/09/2020"</span>
            </div>
            <div>
                <span>Prediction Horizon:</span><span style={{color:'#c4c4c4'}}>"+24h"</span>
            </div>
            </div>
            <div className="predict-table-container">
                <table>
                        <tr>
                        <th>Targets</th>
                        <th>Prediction '(+24h)'</th>
                        <th>Confidence Level</th>
                        </tr>
                        <tr>
                        <td><div><p>Factor1</p></div></td>
                        {/* Mettre une condition pour verifier que la prediction est positive ou negative et afficher la bonne classe en fonction et l'icone */}
                        <td>
                        <div style={{backgroundColor:'#0000ff'}}>
                            <img src={arrowUp} alt="arrow up"/>
                            <p>30%</p>
                        </div>
                        </td>
                        {/* Mettre une condition pour afficher 4 niveaux differemys de vert */}
                        <td>
                            <div style={{backgroundColor:'#17A137'}}>
                                <p>60%</p>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td><div><p>Factor2</p></div></td>
                        <td>
                        <div style={{backgroundColor:'#0000ff'}}>
                            <img src={arrowUp} alt="arrow up"/>
                            <p>90%</p>
                        </div>
                        </td>
                        <td>
                        <div style={{backgroundColor:'#17A137'}}>
                            <p>80%</p>
                        </div>
                        </td>
                        </tr>
                        <tr>
                        <td><div><p>Factor3</p></div></td>
                        <td>
                        <div style={{backgroundColor:'#F65656'}}>
                            <img src={arrowDown} alt="arrow down"/>
                            <p>10%</p>
                        </div>
                        </td>
                        <td>
                        <div style={{backgroundColor:'#80ED99'}}>
                            <p>10%</p>
                        </div> 
                        </td>
                        </tr>
                </table>
            </div>
        </div>
        <div className="edit-model-container"></div>
        <NextPreview 
            handlePreview={handlePreview}
            nextVisibility={nextVisibility}
            previewVisibility={previewVisibility}
            text="Save"
            className="save-button"
            />
    </div>
    )
}

export default Predict;