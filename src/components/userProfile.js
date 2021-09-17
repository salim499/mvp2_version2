// Import from react
import React, {useState} from 'react'

// Import icons
import user_profile from '../assets/icons/user_profile.svg'

// Import css files
import '../css/userProfile.css'

// Import contexts
import { useAuth } from "../contexts/user"

function UserProfile() {

    // useContext
    const { logout } = useAuth()

    // useState
    const [showUserProfile, setShowUserProfile] = useState(false)

    // functions
    const handleShowUserProfile = () => {
        setShowUserProfile(!showUserProfile)
      }
  
      const handleUserLogOut = async () => {
        logout()
      }

    return (
        <>
            <div className="user_information">
                <div className="user_information-user_name">
                    Cheikh Ljama3
                </div>
                <div onClick={handleShowUserProfile}>
                    <img src={user_profile} />
                </div>
            </div>
            {showUserProfile&&
              <div className="user_information-details"
              onClick={handleUserLogOut}>
                LogOut
              </div>
            }
        </>
    )
}

export default UserProfile
