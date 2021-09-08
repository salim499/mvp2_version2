// Import from react
import { useEffect, useState } from 'react'

// Import from libraries
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
import ChoseDataset from './features/choseDataset'
import ComposePortfolio from './features/composePortfolio'
import Dashboard from './features/dashboard'
import ViewPortfolio from './features/viewPortfolio'
import ChoseDateWindow from './features/choseDateWindow'
import CausalModelView from './features/causalModelView'

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
      <Route path="/portfolio-causal-model" exact>
        <CausalModelView/>
      </Route>        
      <Route path="/view-portfolio" exact>
        <ViewPortfolio/>
      </Route>
      <Route path="/compose-portfolio" exact>
        <ComposePortfolio/>
      </Route>
      <Route path="/create-portfolio" exact>
        <ChoseDataset/>
      </Route>
      <Route path="/chose-date-window" exact>
        <ChoseDateWindow/>
      </Route>
      <Route path="/signup" exact>
        <Signup/>
      </Route>
      <Route path="/login" exact> 
        <Login/>
      </Route>
      <Route path="/update-count" exact> 
        <UpdateCount/>
      </Route>
   
      </Router>
      </div>
  );
}

export default App;
