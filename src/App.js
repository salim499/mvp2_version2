// Import from react
import { useEffect } from 'react'

// Import from libraries
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import css files
import './App.css'

// Import components
import NavBar from './components/navbar'
import Signup from './components/signup'
import SignIn from './components/signIn'
import UpdateCount from './components/updateCount'


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

  useEffect(()=>{
    fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "36f99601d0mshff227eef7694e85p164d14jsn84b0ebf94d9e",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
    .then(response => 
      response.json()
    )
    .then((errs) => {
      console.log(errs);
    });
  },[])

  return (
      <Router>
      <NavbarProvider>
      <AuthProvider>
      <NavBar/>
      <div>
      <Route path="/" exact>
        <CausalModelView/>
      </Route>        
      <Route path="/view-portfolio" exact>
        <ViewPortfolio/>
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard/>
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
      <Route path="/sign_in" exact> 
        <SignIn/>
      </Route>
      <Route path="/update-count" exact> 
        <UpdateCount/>
      </Route>
      </div>
      </AuthProvider>
      </NavbarProvider>
      </Router>
  );
}

export default App;
