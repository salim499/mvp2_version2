import React, {useRef, useState} from 'react'

// Import from libraries
import {Link} from 'react-router-dom'
import axios from 'axios'

// Import css files 
import '../css/signup.css'

// Import icons
import emailIcon from '../assets/icons/email.svg'
import passwordIcon from '../assets/icons/password.svg'

// Const 
const passwordsMatchError = "Passwords do not match"

function Signup() {

    // useRef 
    const email=useRef()
    const password = useRef()
    const passwordConfirm = useRef()

    // useState
    const [errorMessage, setErrorMessage] = useState(null)

    // functions
    const handleSignUp = async (e) => {
        e.preventDefault()

        // verify if password === passwordConfirm


        // send information to backend and try to signup  
        
            /*const res=await axios.post(`${process.env.REACT_APP_URL_MASTER}/signin`,
            { name:"toto", password:"toto" })*/
            //console.log(res)
            const res2=await axios.post(`http://82.123.47.154:8087/users`,
            { name:"totoSSSSs", password:"totoSSSSs"})
            console.log(res2)
            console.log("3AAAAA")
        
    }

    return (
        <>
        <div className="signup-container">
          <div className="signup-text">
              Welcome !
          </div>
          <form onSubmit={handleSignUp}>
          <div className="signup-email">
              <div className="signup-email-label">
                  Email Address / Username
              </div>
              <div className="signup-email-input">
                  <input type="text" className="signup-email-input-text" ref={email}></input>
                  <img className="signup-email-input-logo" src={emailIcon}/>
              </div>
              <div className="signup-email-input-delimiter">

              </div>
          </div>
          <div className="signup-password">
              <div className="signup-email-label">
                  Password
              </div>
              <div className="signup-email-input">
                  <input type="password" className="signup-email-input-text" ref={password}></input>
                  <img className="signup-email-input-logo" src={passwordIcon}/>
              </div>
              <div className="signup-email-input-delimiter">
                  
              </div>
          </div>
          <div className="signup-password">
              <div className="signup-email-label">
                  Confirm password
              </div>
              <div className="signup-email-input">
                  <input type="password" className="signup-email-input-text" ref={passwordConfirm}></input>
                  <img className="signup-email-input-logo" src={passwordIcon}/>
              </div>
              <div className="signup-email-input-delimiter">
                  
              </div>
          </div>
          <div className="signup-terms">
              <div className="signup-terms-text">
                  I read and agree to Terms, Conditions
              </div>
              <input type="checkbox" className="signup-terms-checkbox"></input>
          </div>
          
          <input type="Submit" value="Sign Up" className="signup-form-submit"></input>
          </form>
        </div>
        <div className="signup-secondContainer">
            <div className="signup-secondContainer-text">
                Have An Account? <Link to="/login">SignIn</Link>
            </div>
        </div>
        </>
    )
}

export default Signup
