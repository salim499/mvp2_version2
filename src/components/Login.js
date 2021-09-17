import React, {useRef} from 'react'

// Import icons
import scalnyxLogo from '../assets/icons/logo_scalnyx.svg'
import esgLogo from '../assets/icons/esgLogo.svg'
import lock from '../assets/icons/lock.svg'

// import contexts
import { useAuth } from "../contexts/user"
import { useNavBar } from "../contexts/navbar"

const Login= () => {

    // import sign_in function 
    const { sign_in} = useAuth()

    // useRef 
    const email=useRef()
    const password = useRef()

    // functions
    const handleSignIn = async(e) => {
        e.preventDefault()
        // send information to backend and try to sign in
        console.log(email.current.value)
        console.log(password.current.value)
        try {
            await sign_in(email.current.value, password.current.value)
        }
        catch {
            console.log("failed to login")
        }
    }

    return(
        <div className="login-container">
            <div className="marketing-section">
                {/* - SCALNYX LOGO + ESG LOGO + SLOGAN */}
                <img src={scalnyxLogo} at="logo scalnyx"/>
                <img src={esgLogo} alt="logo esg"/>
                <p>
                ESG integration can no longer be overlooked
                </p>
            </div>
            <div className="login-section">
                <div className="form-login-bloc">
                    <h2>Welcome ! Enter below your credentials</h2>
                    {/* <p className="error"></p> */}
                    <form>
                    <div>
                    <label className="label">Username</label>
                    <br />
                    <div className="inputWithIcon">
                        <input
                        className="form-input-with-icon"
                        type="text"
                        ref={email}
                        />
                        {/* <img className="email-icon" src={mail} alt="email-icon" /> */}
                    </div>
                    </div>
                    <div>
                    <label className="label">Password</label>
                    <br />
                    <div className="inputWithIcon">
                        <input
                        className="form-input-with-icon"
                        type="password"
                        ref={password}
                        />
                        <img className="lock-icon" src={lock} alt="lock-icon" />
                    </div>
                    </div>
                    <button onClick={handleSignIn} className="signin-btn" type="submit">
                        Sign in
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
