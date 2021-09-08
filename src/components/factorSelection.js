// Import from react
import React, {useState, useEffect, useCallback} from 'react'

// Import icons 
import delete_factor from '../assets/icons/delete.svg'
import star from '../assets/icons/star.svg'

// Import css files 
import '../css/factorSelection.css'

// import components 
import AddDeleteRelation from '../components/addDeleteRelation'

function FactorSelection(props) {

    // useState
    const [selectedFactors, setSelectedFactors] = useState([])


    // useCallback
    const handleAddRelation = (from, to) => {
        console.log(from, to)
        props.handleAddRelation(from, to)
    }

    // useEffect
    // reset selected factors to an empty array on change of the current action
    useEffect (()=>{
        setSelectedFactors([])
    },[props.currentSelectedAction])

    // functions 
    const handleSetFactorsOrders = (event) => {
        props.handleSetFactorsOrders(event.target.dataset.id, event.target.value)
    }

    const handleSelectFactors = (event) => {
        // find the selected factor in factors
        const findInFactors = props.factors.find(factor=>factor.name===event.target.value)
        setSelectedFactors(selectedFactors=>[findInFactors, ...selectedFactors])
    }

    const handleUnselectFactors = (event) => {
        // find the unselected factor in selected factors
        setSelectedFactors(selectedFactors.filter(factor=>factor.name!=event.target.dataset.name))
        // delete the factor for model constraints history
        props.handleUnselectFactors(event.target.dataset.id)
    }

    const handleSetFactorsFilters = (event) => {
        props.handleSetFactorsFilters(event.target.dataset.id, event.target.value)
    }

    return (
        <>
        { props.currentSelectedAction!= "addRelation" && props.currentSelectedAction!= "deleteRelation" &&
        <div className="model-see_constraints-orders">
        <select className="model-see_constraints-orders-select" onChange={handleSelectFactors}>
        <option key="choseFactor" value="">chose factor</option>    
        {
            props.factors.map((factor, index)=>(
                !selectedFactors.find(selectedFactor=>selectedFactor.name===factor.name)&&
                <option key={factor.name}>{factor.name}</option>
            ))
        }
        </select>
        <div className="model-see_constraints-orders-items">                   
        {
         selectedFactors.map((factor, index)=>(
            <div className="model-see_constraints-orders-items-item" key={factor.name}>
            <div className="model-see_constraints-orders-items-item-label">
                <div className="model-see_constraints-orders-items-item-label-text">
                    {factor.name.length<13?factor.name.substr(0,13):factor.name.substr(0,13)+"..."}
                </div>
            </div>
            <div className="model-see_constraints-orders-items-item-inputs">
                {
                props.currentSelectedAction==="orderFactor"&&
                <input data-id={factor.id} type="number" className="model-see_constraints-orders-items-item-inputs-input" 
                onChange={handleSetFactorsOrders}/>
                }
                {
                props.currentSelectedAction==="filterFactor"&&
                <select  className="model-see_constraints-orders-items-item-inputs-select"
                data-id={factor.id}
                onChange={handleSetFactorsFilters}>
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                </select>
                }
                {
                props.currentSelectedAction==="choseAsset"&&
                <img src={star} className="model-see_constraints-orders-items-item-inputs-icon"/>
                }
                {
                props.currentSelectedAction==="deleteFactor"&&
                <div className="model-see_constraints-orders-items-item-inputs-empty"/>      
                }
                <img src={delete_factor} className="model-see_constraints-orders-items-item-inputs-icon"
                data-name={factor.name}
                data-id={factor.id}
                onClick={handleUnselectFactors}/>
            </div>
        </div> 
         ))   
        }         
        </div>
        </div>
        }
        {
        props.currentSelectedAction==="addRelation"&&
        <AddDeleteRelation action="add"
        factors={props.factors}
        handleAddRelation={handleAddRelation}/>
        }
        {
        props.currentSelectedAction==="deleteRelation"&&
        <AddDeleteRelation action="delete"
        factors={props.factors}
        handleAddRelation={handleAddRelation}/>            
        }
    </>
)
}

export default FactorSelection
