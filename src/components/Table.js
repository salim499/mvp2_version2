// Import from react
import React, {useState} from 'react'

// Import icons 
import NotStationary from '../assets/icons/warning.svg'
import Stationary from '../assets/icons/ok_green.svg'
import TreatedByScalnyx from '../assets/icons/ok_blue.svg'

// Import from components 
//import Histogram from './binaryChart'
import Histogram from './histogram'

// Constants 
const types = ["All","numerical", "categorical", "date"]

function Table(props) {

    // useState
    const [factorNameInputValue, setFactorNameInputValue] = useState("")
    const [factorTypeSelectValue, setFactorTypeSelectValue] = useState("All")
    const [factorStationaryInputValue ,setFactorStationaryInputValue] = useState("")

    // functions
    const handleDeleteFactor = (factorName) => {
      props.handleDeleteFactor(factorName)
    }

    const handleShowHistogram = (factorName) => {
      props.handleShowHistogram(factorName)
    }

    const handleChangeFactorNameInputValue = (event) => {
      props.setChosenPaginationNumber(1)
      setFactorNameInputValue(event.target.value)
    }

    const handleChangeFactorTypeSelectValue = (event) => {
      props.setChosenPaginationNumber(1)
      setFactorTypeSelectValue(event.target.value)
    }

    const handleChangeStationaryInputValue = (event) => {
      props.setChosenPaginationNumber(1)
      setFactorStationaryInputValue(event.target.value)
    }

    return (
        <section>
        <table 
        className="reporting-table-table-auto"
        >
          <thead>
          <tr className="factors-table-header" >
            <th className="val-1">Factor name</th>
            <th className="val-2">Type</th>
            <th className="val-3"></th>
            <th className="val-4">Stationary</th>
          </tr>
          <br/>
          <br/>
          <tr className="factors-table-header">
            <th className="val-1">
              <input type="text" 
              onChange={handleChangeFactorNameInputValue}/>
            </th>
            <th className="val-2">
              <select onChange={handleChangeFactorTypeSelectValue}>
              {
              types.map(type=>(
               <option>{type}</option>
              ))
              }
              </select>
            </th>
            <th className="val-3"> 
            <span>Discretization</span>
            </th>
            <th className="val-4">
              <input type="text" 
              onChange={handleChangeStationaryInputValue}/>
            </th>
          </tr>
          </thead>
          { 
            props.factorsTable.filter((factor)=>factor.type!="date").filter((factor,index)=>(
            ((factor.name.startsWith(factorNameInputValue) 
            || factorNameInputValue.length===0)
            && (factor.type===factorTypeSelectValue || factorTypeSelectValue==="All")
            && (factor.stationaryState.startsWith(factorStationaryInputValue) || factor.stationaryState.length===0)
            )) )
            //.filter((factor, index)=>(props.chosenPaginationNumber-1)*10<=index && index<props.chosenPaginationNumber*10)
            .map((factor,index)=>(
              ((props.chosenPaginationNumber-1)*10<=index && index<props.chosenPaginationNumber*10)&&
           <tr className="factor-row table-factors-select" id="dz" key={factor.name}>
            <td className="val-1">
            {factor.name}
            </td>
            <td className="val-2">
            {factor.type}
            </td>
            <td className="val-3"
            onClick={()=>handleShowHistogram(factor.name)}>
            {factor.type==="numerical"&&<Histogram histogram={factor.histogram}/>}
            <br/><br/>
            </td>
            <td className="val-4">
            {
              factor.stationaryState==="treatedByScalnyx"?
              <>
              <p>treatedByScalnyx</p><img src={TreatedByScalnyx}/>
              </>
              :factor.stationaryState==="stationary"?
              <>
              <p>stationary</p><img src={Stationary}/>
              </>
              :
              <>
              not stationary<img src={NotStationary}/>
              </>
            }
            </td>
            <div className="close" 
            onClick={()=>handleDeleteFactor(factor.name)}>
            </div>
            </tr>                
            ))
          }
        </table>
        </section>
    )
}

export default React.memo(Table)
