// Import from 'react
import React, {useState, useCallback, useEffect} from 'react'

// Import from libraries
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { get } from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

// Import css files 
import '../css/composePortfolio.css'

// Import components
import Timeline from '../components/timeline'
import DataSetContainer from '../components/dataSetContainer'
import ListFactorsContainer from '../components/dragSection'
import AddCategory from '../components/addItem'
import Category from '../components/dropItem'
import NextPreview from '../components/nextPreview'
import ModalNewCategory from '../components/modalNewItem'

// Import staticData
import {colorPallet} from '../staticData/colors'

// Import contexts
import { useNavBar } from "../contexts/navbar"

// Constants 
const timelineLevel = 2

function ComposePortfolio() {

    // useLocations 
    const location = useLocation()

    // useHistory 
    const history = useHistory()
  
    // useContext
    const {navBarState} = useNavBar()

    // useState
    const [categories, setCategories] = useState([])
    const [showModalNewCategory, setShowModalNewCategory] = useState(false)
    const [factors, setFactors] = useState([])
    const [previewVisibility, setPreviewVisibility] = useState("visible")
    const [nextVisibility, setNextVisibility] = useState("visible")
    const [currentDropIndex, setCurrentDropIndex] = useState(null)

    // useCallback
    // show or hide the modal to create a new category 
    const handleShowAddCategoryModal = useCallback (()=>{
        setShowModalNewCategory(!showModalNewCategory)
    },[showModalNewCategory])
     
    // create a new category
    const handleCreateNewCategory = useCallback ((categoryName)=>{
        setCategories(categories=>[...categories, {name:categoryName, factors:[]}])
    },[categories])
    // remove category from categories
    const handleDeleteCategory = useCallback ((categoryName)=>{
        // move factors of the deleted category to drag section
        const categoryToRemove = categories.find(category=>category.name === categoryName)
        setFactors(factors.concat(categoryToRemove.factors))
        // remove category from categories state
        setCategories(categories.filter(category=>category.name!=categoryName))
    },[categories, factors])

    // preview button
    const handlePreview = useCallback (()=>{
        history.push({
            pathname : '/create-portfolio',
        }) 
    },[])

    // next button 
    const handleNext = useCallback (()=>{
        history.push({
            pathname : '/chose-date-window',
            state : location.state
        }) 
    },[location.state])

    // useEffect 
    useEffect(async()=>{
      try {
        const res= await get(`${process.env.REACT_APP_URL_MASTER}/datasources/${location.state}`,
        {
            headers:{
                token: localStorage.getItem('token')
            }
        }
        )
        res.data.columns.forEach(column => {
            setFactors(factors=>[...factors, {name:column}])
        })
      }
      catch (e) {
          console.log(e)
      }
    },[])

    // functions 
    const handleOnDragEnd = (result) => {
        console.log(result.destination.index)
        // remove highlight from categories sections
        setCurrentDropIndex(null)
        // no drop destination or destination not equal to categories container 
        if (!result.destination  || result.destination.droppableId != 'categories') return;

        // case dnd Category
        if (result.source.droppableId==='categories'){
        const categoriesLocal = [...categories]
        const [dndItem] = categoriesLocal.splice(result.source.index, 1)
        categoriesLocal.splice(result.destination.index, 0, dndItem)
        setCategories(categoriesLocal)
        return
        }

        // case dnd Factor 
        if (result.source.droppableId==='factors'){
        // remove factor from drag Container
        const factorsLocal = [...factors]
        const [factor] = factorsLocal.splice(result.source.index, 1)
        setFactors(factorsLocal)
        //add factor to category container 
        const categoriesLocal = [...categories]
        categoriesLocal[result.destination.index].factors.push(factor)
        setCategories([...categoriesLocal])
        }
    }
    
    const handleOnDragUpdate = (result) => {
        if(!result.destination || result.source.droppableId === 'categories') return

        // change and highlight drop section background color
        setCurrentDropIndex(result.destination.index)
    }

    return (
      <div className={navBarState?"App":"App2"}>
        <Timeline timelineLevel={timelineLevel}/>
        <DataSetContainer/>
        <DragDropContext 
        onDragEnd={handleOnDragEnd}
        onDragUpdate={handleOnDragUpdate}>
            <ListFactorsContainer factors={factors}/>
            <Droppable droppableId="categories">
            {(provided) => (
                <div className="list_categories"
                {...provided.droppableProps} ref={provided.innerRef}>
                    
                    <AddCategory handleAddItem={handleShowAddCategoryModal}/>
                    {
                        categories.map((category, index)=>(
                            <Draggable 
                            key={category.name} 
                            draggableId={category.name} 
                            index={index} 
                            >
                             {(provided2) => (
                            <Category 
                            item={category} 
                            provided={provided2} 
                            color={colorPallet[index]} 
                            backgroundP={currentDropIndex===index?'lightblue':'#FFFFFF'}  
                            handleDeleteItem={handleDeleteCategory}
                             />
                             )}
                            </Draggable>
                        ))
                    }
                    {provided.placeholder}
                </div>
            )}
            </Droppable>
        </DragDropContext>
        <NextPreview
        handleNext={handleNext}
        handlePreview={handlePreview}
        nextVisibility={nextVisibility}
        previewVisibility={previewVisibility} 
        />
        {showModalNewCategory&&
        <ModalNewCategory typeItem="New Category" 
        handleCreateItem={handleCreateNewCategory}
        handleHideModal={handleShowAddCategoryModal}/>
       }
      </div>
    )
}

export default ComposePortfolio