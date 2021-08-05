// Import from libraries
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import css files
import './App.css'

// Import components
import NavBar from './components/navbar'
import Signup from './components/signup'
import SignIn from './components/signIn'
function App() {
  return (
      <Router>
      <NavBar/>
      <div className="App">
      <Route path="/signup" exact>
        <Signup/>
      </Route>
      <Route path="/sign_in" exact> 
        <SignIn/>
      </Route>
      </div>
      </Router>
  );
}

export default App;
