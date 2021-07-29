// Import from libraries
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import css files
import './App.css'

// Import components
import NavBar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      </Router>
    </div>
  );
}

export default App;
