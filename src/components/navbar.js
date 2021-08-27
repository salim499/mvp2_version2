// Import from react
import { useState, useEffect } from 'react'

// Import from libraries 
import {IconContext} from 'react-icons'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import {Link, useLocation} from 'react-router-dom'

// Import icons
import dashboard_navbar from '../assets/icons/dashboard_navbar.svg'
import newModel_navbar from '../assets/icons/model_navbar.svg'
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
    const { pathname } = useLocation();
    // useState
    const [showSideBar, setShowSideBar]=useState(true)

    // useEffect
    useEffect(()=>{
      console.log(navBarState)
    },[navBarState])

    return (
    <div className="navbar">
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className="nav-header">
        <div className="nav-menu-user">  
         <div className="menu-bars">
      
         </div> 
         {
           currentUser != null && !currentUser.is_admin &&
           <Link to="/update-count" className="menu-bars-text">
            UpdateCount
           </Link> 
         }        
        <Link to="/sign_in" className="menu-bars-text">
          Login
        </Link>  
        {
          currentUser && currentUser.is_admin &&
          <Link to="/signup" className="menu-bars-text">
            Add user
          </Link> 
        }
  
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
                  <Link to="/dashboard" style={{color:pathname=="/dashboard"&&"rgb(46,196,182)"}}>
                    <img src={dashboard_navbar}/>
                    <span>Dashboard</span>
                  </Link>
                </li>
            </div>
            <div className='navbar-texts'>
                <li key="newmodel"  className="nav-text">
                  <Link to="/create-portfolio">
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
                  </Link>
                </li>
            </div>
            <div className='navbar-texts'>
                <li key="pdfReport"  className="nav-text">
                  <Link to="#">
                    <span className="navbar-pdfReport-label">PDF Report</span>
                  </Link>
                </li>
                <div className="navbar-pdfReport-text">
                  download pdf monthly
                </div>
            </div>
            <div className='navbar-texts'>
                <li key="newmodel"  className="nav-text">
                  <Link to="new-model">
                   <button className="btn-download">Download</button>
                  </Link>
                </li>
            </div>
          </ul>
        </nav>
    </div>
    )
}

export default NavBar
