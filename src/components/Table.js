// Import from react
import React from 'react'

const typesFilter=['type1', 'type2', 'type3','type4', 'type5', 'type6']
const statusFilter=['status1', 'status2', 'status3','status4', 'status5', 'status6']
const clDropLayoutFactorsContextValue=
[
 {name:'factor1',type:'integer',isTarget:true},
 {name:'factor2',type:'integer',isTarget:true},
 {name:'factor3',type:'integer',isTarget:true},
 {name:'factor4',type:'integer',isTarget:true},
 {name:'factor5',type:'integer',isTarget:true},
 {name:'factor6',type:'integer',isTarget:true},
]
const types=['type1', 'type2', 'type3','type4', 'type5', 'type6']
function Table() {
    return (
        <section>
        <table 
        className="reporting-table-table-auto"
        >
          <thead>
          <tr className="factors-table-header" >
            <th className="val-1">Factor name</th>
            <th className="val-2">Type</th>
            <th className="val-3">Target</th>
          </tr>
          <br/>
          <br/>
          <tr className="factors-table-header">
            <th className="val-1">
              <input type="text" ></input>
              </th>
            <th className="val-1">
              <select name="models" id="models-choices">
              {typesFilter.map((type, index) => (
                <option key={type}>{type}</option>
              ))
              }
          </select>
            </th>
            <th className="val-1"> 
              <select name="models" id="models-choices">
              {statusFilter.map((state, index) => (
                <option key={state}>{state}</option>
              ))
              }
          </select>
            </th>
          </tr>
          </thead>
          
          { 
            clDropLayoutFactorsContextValue
            .map((factor,index)=>(
           <tr className="factor-row table-factors-select" id="dz" key={factor.name}>
            <td className="val-1" key={factor.name}>{factor.name}</td>
            <td className="val-1" key={factor.name?factor.name+"name":Math.random()}>
              <select name="models" id="models-choices"
              defaultValue={factor.type?factor.type:null}>
              {types.map((type, index) => (
                <option key={type}>{type}</option>
              ))
              }
          </select>
            </td>
            <td className="val-1" key={factor.isTarget?factor.isTarget.toString():null}>
            <label class="switch">
            <input type="checkbox" id="toggle" className="toggle--checkbox" defaultChecked ={factor.isTarget}/>
            <span class="slider round"></span>
            </label>
            <br/><br/>
            </td>
            <div className="close">

            </div>
              </tr>                
            ))
          }
        </table>
        </section>
    )
}

export default Table
