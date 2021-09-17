// Import from react
import { useState, useEffect } from 'react'

// Import from libraries 
import {IconContext} from 'react-icons'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import {Link, useLocation} from 'react-router-dom'

// Import icons
import dashboard_navbar from '../assets/icons/dashboard_navbar.svg'
import dashboard_navbar_selected from '../assets/icons/dashboard_navbar_selected.svg'
import newModel_navbar from '../assets/icons/model_navbar.svg'
import newModel_navbar_selected from '../assets/icons/model_navbar_selected.svg'
import analysis_navbar from '../assets/icons/analysis_navbar.svg'
import scalnyx_logo from '../assets/icons/scalnyx_logo.svg'

// Import css files
import '../css/navbar.css'

// Import contexts
import { useAuth } from "../contexts/user"
import { useNavBar } from "../contexts/navbar"

function NavBar(props) {

  const {navBarState, setNavBarState} = useNavBar()

    // import signup function and current user state
    const { currentUser } = useAuth()

    // functions 
    const handleShowSideBar=()=>{
        setShowSideBar(!showSideBar)
        setNavBarState(!navBarState)
    }
    // useLocation
    const  pathname  = useLocation();
    // useState
    const [showSideBar, setShowSideBar]=useState(false)

    useEffect(()=>{
      console.log(pathname)
    },[pathname])


    return (
    <div className={!showSideBar ? 'navbar' : 'navbar2'}>
        <IconContext.Provider value={{ color: '#081C4D' }}>
        <div className="nav-header" style={{height: !showSideBar&&'0px'}}>
        <div className="nav-menu-user">  
        </div>
          <div className="menu-bars-toggle">
          <Link to="#" className="menu-bars">
          <FaBars onClick={handleShowSideBar}/>
          </Link> 
          </div>
        </div>
        </IconContext.Provider>
        <nav className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <IconContext.Provider value={{ color: '#fff' }}>
              <Link to='#' className='menu-bars' onClick={handleShowSideBar}>
                <AiOutlineClose onClick={handleShowSideBar} />
              </Link>
              </IconContext.Provider>
            </li>
            <img src={scalnyx_logo} className="nav-scalnyx-logo"/>
            <div className='navbar-texts'>
                <li key="dashboard" className="nav-text">
                  <Link to="/dashboard" style={{color:pathname.pathname=="/dashboard"&&"#fff"}}>
                  {
                    pathname.pathname=="/dashboard"?
                    <img src={dashboard_navbar_selected}/>
                    :
                    <img src={dashboard_navbar}/>
                  }  
                    <span>Dashboard</span>
                  </Link>
                </li>
            </div>
            <div className='navbar-texts'>
<<<<<<< HEAD
                <li key="newModel"  className="nav-text">
                  <Link to="/choose-dataset" style={{color:pathname.pathname=="/choose-dataset"&&"#fff"}}>
                    {
                      pathname.pathname=="/choose-dataset"?
                      <img src={newModel_navbar_selected}/>
                      :
                      <img src={newModel_navbar}/>
                    }
                    <span style={{color:pathname=="/choose-dataset"&&"rgb(46,196,182)"}}>New Model</span>
=======
                <li key="newmodel"  className="nav-text">
                  <Link to="/choose-dataset">
                    <img src={newModel_navbar}/>
                    <span style={{color:pathname=="/create-model"&&"rgb(46,196,182)"}}>New Model</span>
                  </Link>
                </li>
            </div>
            <div className='navbar-texts'>
                <li key="analysis"  className="nav-text">
                  <Link to="/analysis">
                    <img src={analysis_navbar} style={{color:pathname==="/analysis"&&"rgb(46,196,182)"}}/>
                    <span>Analysis</span>
>>>>>>> choose-target
                  </Link>
                </li>
            </div>
          </ul>
        </nav>
    </div>
    )
}

export default NavBar