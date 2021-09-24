// Import from react
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import icons
import user_profile from '../assets/icons/user_profile.svg'

// Import css files
import '../css/userProfile.css'

// Import icons
import arrow from '../assets/icons/arrow_right.svg'

// Import contexts
import { useAuth } from "../contexts/user"

function UserProfile() {

    // useHistory
    const history = useHistory()

    // useContext
    const { logout } = useAuth()

    // useState
    const [showUserProfile, setShowUserProfile] = useState(false)
    const [dropDown, setDropDown] = useState(false);
    const [data, setData] = useState({});

    // functions
    const handleShowUserProfile = () => {
        setShowUserProfile(!showUserProfile)
      }
  
      const handleUserLogOut = async () => {
        logout()
      }

    // return (
    //     <>
    //         <div className="user_information">
    //             <div className="user_information-user_name">
    //                User
    //             </div>
    //             <div onClick={handleShowUserProfile}>
    //                 <img src={user_profile} />
    //             </div>
    //         </div>
    //         {showUserProfile&&
    //           <div className="user_information-details"
    //           onClick={handleUserLogOut}>
    //             LogOut
    //           </div>
    //         }
    //     </>
    // )

  return(
    <div className="user-header">
    <div
      className="user-header-area"
      onClick={() => {
        setDropDown(!dropDown);
      }}
    >
      <div>
        <span className="user-header-name">
          {/* {data.firstName} {data.name} */}
          John Bell
        </span>
        <br />
        <span className="user-header-company">
          {/* {data.company.companyName} */}
          Binford Ltd.
        </span>
      </div>
      <FontAwesomeIcon id="arrow" icon="angle-down" />
    </div>

    {dropDown && (
      <div className="dropdown">
        <ul>
          <li
            className="disconnect-link"
            onClick={() => {
              history.push("/");
              handleUserLogOut()
            }}
          >
            <div>Log out</div>
            <img src={arrow} alt="arrow-right" />
           
          </li>
        </ul>
      </div>
    )}
  </div>
  )
}

export default UserProfile
