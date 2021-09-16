// Import from react
import { useEffect, useState } from 'react'

// Import from libraries
// React-router
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios'

// Import css files
import './App.css'

// Import components
import NavBar from './components/navbar'
import Signup from './components/signup'
import Login from './components/Login'
import UpdateCount from './components/updateCount'

import Portal from './components/modalNewItem'

// Import features 
import ChooseTarget from "./features/ChooseTarget";
import ChooseDataset from './features/ChooseDataset'
import ComposePortfolio from './features/composePortfolio'
import Dashboard from './features/dashboard'
import ViewPortfolio from './features/viewPortfolio'
import ChoseDateWindow from './features/choseDateWindow'
import CausalModelView from './features/causalModelView'
import ExploreDataset from './features/ExploreDataset'

// Import contexts
import { useAuth } from "./contexts/user"
import { useNavBar } from "./contexts/navbar"

function App() {

  const {navBarState, setNavBarState} = useNavBar()

  const { currentUser } = useAuth()

  console.log(currentUser)

  return (
    <div className="App">
      <Router>
      {currentUser&& <NavBar/>}
      <Route path="/" exact>
      {
        currentUser?
        <Dashboard/>:
        <Login/>
      }
      </Route> 
    {/* Dashboard */}
      <Route path="/dashboard">
          <Dashboard/>
      </Route>
      <Route path="/choose-dataset">
        <ChooseDataset/>
      </Route>
      <Route path="/explore-dataset">
        <ExploreDataset/>
      </Route> 
      <Route path="/choose-target">
        <ChooseTarget/>
      </Route>
      <Route path="/login"> 
        <Login/>
      </Route>
      </Router>
      </div>
  );
}

export default App;
