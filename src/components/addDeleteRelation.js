// Import from react
import React, {useState} from 'react'

// Import icons
import FromTo from '../assets/icons/fromTo.svg'
import DeleteRelation from '../assets/icons/delete.svg'

// Import css files
import '../css/addDeleteRelation.css'


function AddDeleteRelation(props) {

    // useState
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)

    // functions 
    const handleFrom = (event) => {

        // case of destination factor already existing
        if(to!=null){
            props.handleAddRelation(props.factors.find(factor=>factor.name===event.target.value).id, to)
            // reset from and to states
            setFrom(null)
            setTo(null)
        }

        // set From Id
        setFrom(props.factors.find(factor=>factor.name===event.target.value).id)

    }
    const handleTo = (event) => {

        // case of source factor already existing
        if(from!=null){
            props.handleAddRelation(from,props.factors.find(factor=>factor.name===event.target.value).id)
            // reset from and to states
            setFrom(null)
            setTo(null)
            return
        }

        // set To Id
        setTo(props.factors.find(factor=>factor.name===event.target.value).id)
    }

    return (
        console.log(props.factors),
        <div className="model-see_constraints-relations">
            <div className="model-see_constraints-relations-title">
                Select factors to {props.action} relation
            </div>
            <div  className="model-see_constraints-relations-fromTo">
              <div className="model-see_constraints-relations-fromTo-item" style={{
                  marginBottom:'30px'
              }}>
                <div className="model-see_constraints-relations-fromTo-text">
                    From 
                </div>
                <select className="model-see_constraints-relations-fromTo-select"
                onChange={handleFrom}>
                <option key="choseFactor" value="">chose factor</option> 
                {
                props.factors.map((factor, index)=>(
                    factor.id != to &&
                    <option key={factor.id}>{factor.name}</option>
                ))
                }
                </select>
              </div>
              <div className="model-see_constraints-relations-fromTo-item">
                <div className="model-see_constraints-relations-fromTo-text">
                    To
                </div>
                <select className="model-see_constraints-relations-fromTo-select"
                onChange={handleTo}>
                <option key="choseFactor" value="">chose factor</option> 
                {
                props.factors.map((factor, index)=>(
                    factor.id != from &&
                    <option key={factor.id}>{factor.name}</option>
                ))
                }
                </select>
              </div>
            </div>
            <div className="model-see_constraints-relations-relations">
                <div className="model-see_constraints-relations-relations-item">
                    <div className="model-see_constraints-relations-relations-item-text">
                        Tobacco 
                    </div>
                    <div className="model-see_constraints-relations-relations-item-icon">
                        <img src={FromTo}  />
                    </div>
                    <div className="model-see_constraints-relations-relations-item-text">
                        Animal Testing 
                   </div>
                   <div className="model-see_constraints-relations-relations-item-icon">
                        <img src={DeleteRelation}/>
                   </div>
                </div> 
                <div className="model-see_constraints-relations-relations-item">
                    <div className="model-see_constraints-relations-relations-item-text">
                        Tobacco 
                    </div>
                    <div className="model-see_constraints-relations-relations-item-icon">
                        <img src={FromTo}  />
                    </div>
                    <div className="model-see_constraints-relations-relations-item-text">
                        Animal Testing 
                   </div>
                   <div className="model-see_constraints-relations-relations-item-icon">
                        <img src={DeleteRelation}/>
                   </div>
                </div> 
            </div>
        </div>
    )
}

export default AddDeleteRelation
