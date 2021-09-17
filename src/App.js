// React-router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import css files
import './App.css'

// Import components
import NavBar from './components/navbar'
import Login from './components/Login'

// Import features 
import Predict from "./features/Predict";
import ChooseTarget from "./features/ChooseTarget";
import ChooseDataset from './features/ChooseDataset';
import Dashboard from './features/dashboard';
import ExploreDataset from './features/exploreDataset';

// Import contexts
import { useAuth } from "./contexts/user"
import { useNavBar } from "./contexts/navbar"

function App() {

  const { currentUser } = useAuth()
  const {navBarState} =useNavBar()

  console.log(currentUser)
  console.log(navBarState)


  return (
    <div className="App">
      <Router>
      {currentUser&& <NavBar/>}
      <Route path="/" exact>
      {
        currentUser!=null?
        <Dashboard/>:
        <Login/>
      }
      </Route> 
    {/* Dashboard */}
      <Route path="/dashboard">
          <Dashboard/>
      </Route>
    {/* Choose Dataset */}
      <Route path="/choose-dataset">
        <ChooseDataset/>
      </Route>
      {/* Explore Dataset */}
      <Route path="/explore-dataset">
        <ExploreDataset/>
      </Route>
      {/* Choose Target */} 
      <Route path="/choose-target">
        <ChooseTarget/>
      </Route>
      {/* Predict */} 
      <Route path="/predict">
        <Predict/>
      </Route>
      <Route path="/login"> 
        <Login/>
      </Route>   
      </Router>
      </div>
  );
}

export default App;
