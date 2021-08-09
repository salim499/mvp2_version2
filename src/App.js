// Import from libraries
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import css files
import './App.css'

// Import components
import NavBar from './components/navbar'
import Signup from './components/signup'
import SignIn from './components/signIn'
import UpdateCount from './components/updateCount'
import ChartTest from './components/testChart2'

// Import contexts
import { AuthProvider } from "./contexts/user"

function App() {
  return (
      <Router>
      <AuthProvider>
      <NavBar/>
      <div className="App">
      <Route path="/" exact>
        <ChartTest/>
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
      </Router>
  );
}

export default App;
