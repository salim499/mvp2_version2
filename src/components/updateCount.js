import React, {useRef} from 'react'

// Import from libraries
import {Link} from 'react-router-dom'

// Import css files 
import '../css/signup.css'

// Import icons
import emailIcon from '../assets/icons/email.svg'
import passwordIcon from '../assets/icons/password.svg'

// import contexts
import { useAuth } from "../contexts/user"

const SignIn= () => {

    // import sign_in function and current user state
    const { updateCount, currentUser } = useAuth()

    // useRef 
    const email=useRef()
    const password = useRef()

    // functions
    const handleSignIn = (e) => {
        e.preventDefault()

        // send information to backend and try to update count
        try {
             updateCount(
                 email.current.value,
                 password.current.value, 
                 currentUser.token,
                 currentUser.user_id)
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

          <input type="Submit" defaultValue="Update count" className="signup-form-submit"></input>
          </form>
        </div>
        <div className="signup-secondContainer">
        </div>
        </>
    )
}

export default SignIn
