// Import from react
import React, {useEffect, useState} from 'react'

// Import from libraries
import {get} from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

// Import css files 
import '../css/exploreDataset.css'

// Import components 
import Table from '../components/Table'
import DeletedFactors from '../components/deletedItems'

// Import contexts
import { useNavBar } from "../contexts/navbar"

function ExploreDataset() {

    // useLocations 
    const location = useLocation()

    // useContext
    const {navBarState} = useNavBar()

    // useState
    const [factorsTable, setFactorsTable] = useState([])
    const [factorsDeleted, setFactorsDeleted] = useState([])

    // useEffect 
    useEffect(async()=>{
        try {
            const res= await get(
                `${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}`,
                {
                    headers:{
                        token: localStorage.getItem('token')
                    }
                }
               )
            // build json object from backend data
            const factors=[]
            for (let i=0; i<res.data.columns.length; i++){
                setFactorsTable([...factorsTable, {
                    name:res.data.columns[i],
                    types:[...res.data.dataType],
                    stationaryState:res.data.stationaryState[res.data.columns[i]]
                    }])
                console.log(factorsTable)
            }
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    },[])

    return (
        <div className={navBarState?"container-with-margin":"container-without-margin"}>
            <DeletedFactors factorsDeleted={factorsDeleted}/>
            <Table factorsTable={factorsTable}/>
        </div>
    )
}

export default ExploreDataset
