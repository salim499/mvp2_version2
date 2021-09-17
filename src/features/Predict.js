// Import from react
import React, {useState} from 'react'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Import components
import Timeline from '../components/Timeline'

// Import Icons
import arrowUp from '../assets/icons/arrowUp.svg'
import arrowDown from '../assets/icons/arrowDown.svg'

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
            </div>
        </>
    )
}

export default Predict;