import React, {useRef} from 'react'

// Import from libraries
import {Link} from 'react-router-dom'
import axios from 'axios'

// Import css files 
import '../css/signup.css'

// Import icons
import emailIcon from '../assets/icons/email.svg'
import passwordIcon from '../assets/icons/password.svg'



const SignIn= () => {

    // useRef 
    const email=useRef()
    const password = useRef()

    // functions
    const handleSignIn = async (e) => {
        e.preventDefault()

        // send information to backend and try to sig in
        try {
            const res=await axios.post(`${process.env.REACT_APP_URL_MASTER}/signin`,
            { name:"toto", password:"toto" })
            console.log(res)
        }
        catch {
            console.log("failed to login")
        }
    }

    return (
        <>
        <div className="signup-container">
          <div className="signup-text">
              Welcome back !
          </div>
          <form onSubmit={handleSignIn}>
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
                  <input type="password"  className="signup-email-input-text" ref={password}></input>
                  <img className="signup-email-input-logo" src={passwordIcon}/>
              </div>
              <div className="signup-email-input-delimiter">
                  
              </div>
          </div>

          <div className="signup-terms">
              <div className="signup-terms-text">
                  Remember me
              </div>
              <div className="signup-terms-text">Forgot password?</div>
          </div>
          <input type="Submit" defaultValue="Sign In" className="signup-form-submit"></input>
          </form>
        </div>
        <div className="signup-secondContainer">
            <div className="signup-secondContainer-text">
                Don't Have An Account? <Link to="/register">Sign Up Now!</Link>
            </div>
        </div>
        </>
    )
}

export default SignIn
