// Import from react
import { useState } from 'react'

// Import from libraries 
import {IconContext} from 'react-icons'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import {Link, useHistory} from 'react-router-dom'

// Import svgs
import dashboard_navbar from '../assets/svgs/dashboard_navbar.svg'
import newModel_navbar from '../assets/svgs/newmodel_navbar.svg'
import analysis_navbar from '../assets/svgs/analysis_navbar.svg'
import scalnyx_logo from '../assets/svgs/scalnyx_logo.svg'

// Import css files
import '../css/navbar.css'
function NavBar(props) {
    // functions 
    const handleShowSideBar=()=>{
        setShowSideBar(!showSideBar)
    }
    // use History
    const history=useHistory()
    // useStates
    const [showSideBar, setShowSideBar]=useState(true)

    return (
    <div className="navbar">
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className="nav-header">
        <div className="nav-menu-user">  
         <div className="menu-bars">
         
         {/*<FAIcons.FaUserTimes/>*/} 
         </div> 
        <Link to="/login" className="menu-bars-text">
          Login
        </Link>  
        <Link to="/register" className="menu-bars-text">
          Register
        </Link>   
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
                  <Link to="/dashboard">
                    <img src={dashboard_navbar}/>
                    <span style={{color:history.location.pathname==="/dashboard"&&"rgb(46,196,182)"}}>Dashboard</span>
                  </Link>
                </li>
            </div>
            <div className='navbar-texts'>
                <li key="newmodel"  className="nav-text">
                  <Link to="/new-model">
                    <img src={newModel_navbar}/>
                    <span style={{color:history.location.pathname==="/new-model"&&"rgb(46,196,182)"}}>New Model</span>
                  </Link>
                </li>
            </div>
            <div className='navbar-texts'>
                <li key="analysis"  className="nav-text">
                  <Link to="/analysis">
                    <img src={analysis_navbar}/>
                    <span style={{color:history.location.pathname==="/analysis"&&"rgb(46,196,182)"}}>Analysis</span>
                  </Link>
                </li>
            </div>
          </ul>
          <div className="nav-text">
              PDF report
          </div>
        </nav>
    </div>
    )
}

export default NavBar
