import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import contexts
import { AuthProvider } from "./contexts/user"
import { NavbarProvider} from "./contexts/navbar"

ReactDOM.render(
  <React.StrictMode>
    <NavbarProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </NavbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
