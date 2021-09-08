// Import from react
import { useEffect } from 'react'

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
import { AuthProvider } from "./contexts/user"
import { NavbarProvider} from "./contexts/navbar"

 function App() {
  return (
    <div className="App">
      <Router>
      <NavbarProvider>
      <AuthProvider>
      {/* <NavBar/> */}
      <Route path="/" exact>
      <Dashboard/>
       <Login/>
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
      </AuthProvider>
      </NavbarProvider>
      </Router>
      </div>
  );
}

export default App;
