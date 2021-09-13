// Import from react
import React, {useEffect, useCallback, useState} from 'react'

// Import from libraries
import {post} from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

// Import css files
import '../css/causalModelView.css'

// Import components
import CreatePortfolioNavbar from '../components/createPortfolioNavbar'
import Timeline from '../components/timeline'
import Network from '../components/network'
import ModelActions from '../components/actions'
import ModelDirections from '../components/directions'
import ModelFilterSliders from '../components/slidersFilter'
import ModelFilterCategories from '../components/multiCheck'
import FilterHeader from '../components/filterHeader'
import HistoricalActions from '../components/historicalActions'
import CausalModelGuide from '../components/guide'
import FactorSelection from '../components/factorSelection'
import ModelHeaderFilter from '../components/modelFilter'
import ModelHeaderConstraints from '../components/modelConstraints'
import NextPreview from '../components/nextPreview'
import ModalApplyConstraints from '../components/modalApplyConstraints'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants
const timelineLevel=4
const categories = ["category1", "category2", "category3", "category4"]
const multiCheckName="Categories"

function CausalModelView() {

    // useLocations 
    const location = useLocation()

    // useHistory 
    const history = useHistory()

    // useContext
    const {navBarState} = useNavBar()

    // useState
    const [selectedFactors, setSelectedFactors] = useState([])
    const [selectedRelations, setSelectedRelations] = useState([])
    const [currentSelectedAction, setCurrentSelectedAction] = useState(null)
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")
    const [showModalApplyConstraints, setShowModalApplyConstraints] = useState(false)
    const [factorSliderValue, setFactorSliderValue] = useState(0)
    const [relationSliderValue, setRelationSliderValue] = useState(0)
    const [chosenCategories, setChosenCategories] = useState(categories)
    const [factorsToDelete, setFactorsToDelete] = useState([])
    const [relationsToDelete, setRelationsToDelete] = useState([])
    const [relationsToAdd, setRelationsToAdd] = useState([])
    const [factorsOrders, setFactorsOrders] = useState([])
    const [factorsFilters, setFactorsFilters] = useState([])
    const [dataNetwork, setDataNetwork] = useState(null)
    const [factors, setFactors] = useState([])
    const [relations, setRelations] = useState([])
    const [maxFactorSliderValue, setMaxFactorSliderValue] = useState(null)
    const [maxRelationSliderValue, setMaxRelationSliderValue] = useState(null)
    const [showFilterCategorySection, setShowFilterCategorySection] = useState(true)
    const [zoomIn, setZoomIn] = useState(null)
    const [zoomOut, setZoomOut] = useState(null)

    // preview button
    const handlePreview = useCallback (()=>{
        history.push({
            pathname : '/chose-date-window',
        }) 
    },[])

    // next button 
    const handleNext = useCallback (()=>{
        history.push({
            pathname : '/view-portfolio',
        }) 
    },[])

    // add factor to selected factors state
    const handleSelectFactor = useCallback ((factor)=>{
        setSelectedFactors(selectedFactors=> [...selectedFactors, factor])
    },[selectedFactors])

    // add relation to selected relations state
    const handleSelectRelation = useCallback ((relation)=>{
        setSelectedRelations(selectedRelations=> [...selectedRelations, relation])
    },[selectedRelations])

    // save the current selected action from model model actions
    const handleSelectAction = useCallback ((action)=>{
        console.log(action)
        setCurrentSelectedAction(action)
        // case ZoomIn
        if(action==="zoomIn"){
           setZoomIn(Math.random()) 
           return
        }
        if(action==="zoomOut"){
           setZoomOut(Math.random())   
           return
        }
        // case ZoomOut

    },[])

    // show or hide the modal to apply constraints 
    const handleShowApplyConstraintsModal = useCallback (()=>{
        setShowModalApplyConstraints(!showModalApplyConstraints)
    },[showModalApplyConstraints])


    const handleApplyConstraints = useCallback (()=>{

    },[])

    const handleFactorSliderChangeValue = useCallback ((sliderValue)=>{
        setFactorSliderValue(sliderValue)
    },[factorSliderValue])

    const handleRelationSliderChangeValue = useCallback ((sliderValue)=>{
        setRelationSliderValue(sliderValue)
    },[relationSliderValue])

    const handleChosenCategories = useCallback ((chosenCategoryName, toAdd)=>{
        console.log(chosenCategories)
        if(toAdd){
            setChosenCategories(chosenCategories=> [...chosenCategories,chosenCategoryName])
            return
        }
        setChosenCategories(chosenCategories.filter(categoryName=>categoryName!=chosenCategoryName))
    },[chosenCategories])

    const handleSetFactorsOrders = useCallback((factorId,order) => {
        // verify if the factor is already existing on factors orders
        const findInFactorsOrders = factorsOrders.find(factor => factor.id===parseInt(factorId))
        // case if the factor is already exist in factorsOrders
        if(findInFactorsOrders){
            findInFactorsOrders.order=parseInt(order)
            return
        }
        // case if the factor does not already exist in factorsOrders
        setFactorsOrders(factorsOrders=>([...factorsOrders, {id:parseInt(factorId), order:parseInt(order)}]))
    },[factorsOrders])

    const handleSetFactorsFilters = useCallback((factorId,value) => {
        console.log(factorsFilters)
        // verify if the factor is already existing on factors orders
        const findInFactorsFilters = factorsFilters.find(factor => factor.id===parseInt(factorId))
        // case if the factor is already exist in factorsOrders
        if(findInFactorsFilters){
            findInFactorsFilters.value=value
            return
        }
        // case if the factor does not already exist in factorsOrders
        setFactorsFilters(factorsFilters=>([...factorsFilters, {id:parseInt(factorId), value:value}]))
    },[factorsFilters])

    const handleShowFilterCategorySection = useCallback((value)=>{
        setShowFilterCategorySection(value)
    },[])

    const handleUnselectFactors= useCallback((factorId)=>{
        if(currentSelectedAction==="orderFactor"){
            setFactorsOrders(factorsOrders.filter(factor=>factor.id!=parseInt(factorId)))
            return
        }
        if(currentSelectedAction==="filterFactor"){
            setFactorsFilters(factorsFilters.filter(factor=>factor.id!=parseInt(factorId)))
            return
        }
    },[factorsOrders, factorsFilters, currentSelectedAction])

    const handleAddRelation = useCallback((from, to)=>{
        console.log(relationsToAdd)
        if(currentSelectedAction==="addRelation"){
            setRelationsToAdd(relationsToAdd=>[...relationsToAdd, {src:from, dest:to}])
            return
        }
        if(currentSelectedAction==="deleteRelation"){
            setRelationsToDelete(relationsToDelete=>[...relationsToDelete, {src:from, dest:to}])
            return
        }
    },[[...relationsToAdd]])

    // get model data
    useEffect(async()=>{
        try{
          // set data network
          const res=await post(`http://86.238.208.39:8081/models-mock-1`)
          res.data.network.factors.forEach(factor=>{
              factor.category=categories[Math.floor(Math.random() * categories.length)]
          })
          setDataNetwork(
              {
                  nodes:res.data.network.factors,
                  edges:res.data.network.relations
              }
              )
          // set factors
          setFactors(res.data.network.factors) 
          // set relations
          setRelations(res.data.network.relations)
          // set the max value of filter factor entropy slider
          const maxFactorEntropy=Math.max.apply(Math, res.data.network.factors.map(function(o) { return o.entropy; }))
          setMaxFactorSliderValue(maxFactorEntropy)
          // set the max value of filter relation entropy slider
          const maxRelationEntropy=Math.max.apply(Math, res.data.network.factors.map(function(o) { return o.entropy; }))
          setMaxRelationSliderValue(maxRelationEntropy)
        }
        catch (e){
          console.log(e)
        }
      },[])



    return (
        <>
        <div className={navBarState?"container-with-margin":"container-without-margin"}>
            <Timeline timelineLevel={timelineLevel}/>
            <CreatePortfolioNavbar
            width='100%'
            />
            <div className="model-constraints">
            <div className="model-apply_constraints">
                <ModelHeaderFilter
                handleShowApplyConstraintsModal={handleShowApplyConstraintsModal}
                />
                <div className="model-apply_constraints-body">
                <div className="model-apply_constraints-body-actions">
                    <ModelActions
                    handleSelectAction={handleSelectAction}/>
                    <FilterHeader
                    currentFilterState={handleShowFilterCategorySection}
                    />
                    <ModelFilterCategories
                    multiCheckName={multiCheckName}
                    items={categories}
                    handleChosenItems={handleChosenCategories}
                    showSection={showFilterCategorySection}
                    />
                    <ModelFilterSliders
                    handleFirstSliderChangeValue={handleFactorSliderChangeValue}
                    handleSecondSliderChangeValue={handleRelationSliderChangeValue}
                    maxFirstSliderValue={maxFactorSliderValue}
                    maxSecondSliderValue={maxRelationSliderValue}
                    />
                    <ModelDirections/>
                </div>
                    <div className="model-apply_constraints-body-graph">
                        <ModelHeaderConstraints/>
                        <div className="model-apply_constraints-body-graph-network-header-item">
                            <Network
                            dataNetwork={dataNetwork}
                            handleClickNode={handleSelectFactor}
                            handleClickEdge={handleSelectRelation}
                            factorEntropyValue={factorSliderValue}
                            relationEntropyValue={relationSliderValue}
                            chosenCategories={chosenCategories}
                            zoomIn={zoomIn}
                            zoomOut={zoomOut}
                            />
                         </div>
                    </div>
                </div>
            </div>
            <div className="model-see_constraints">
                <FactorSelection 
                currentSelectedAction={currentSelectedAction}
                handleSetFactorsOrders={handleSetFactorsOrders}
                handleUnselectFactors={handleUnselectFactors}
                handleSetFactorsFilters={handleSetFactorsFilters}
                handleAddRelation={handleAddRelation}
                factors={factors}
                relations={relations}
                />
                <HistoricalActions/>
                <CausalModelGuide/>
            </div>
            </div>
            <NextPreview
            handleNext={handleNext}
            handlePreview={handlePreview}
            nextVisibility={nextVisibility}
            previewVisibility={previewVisibility} 
            />
        </div>
        {
            showModalApplyConstraints&&
            <ModalApplyConstraints
            handleHideModal={handleShowApplyConstraintsModal}
            handleApplyConstraints={handleApplyConstraints}/>
        }
        </>
    )
}

export default CausalModelView
