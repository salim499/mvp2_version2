// Import from react
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
// Import icons
import user_profile from '../assets/icons/user_profile.svg'
 
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
     <FontAwesomeIcon id="arrow" icon="angle-down"/>
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
            <svg width="20" height="20" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 22.6667C10.6667 22.313 10.5262 21.9739 10.2761 21.7239C10.0261 21.4738 9.68696 21.3333 9.33333 21.3333H2.66667V2.66667H9.33333C9.68696 2.66667 10.0261 2.52619 10.2761 2.27614C10.5262 2.02609 10.6667 1.68696 10.6667 1.33333C10.6667 0.979711 10.5262 0.640573 10.2761 0.390524C10.0261 0.140476 9.68696 0 9.33333 0H2.66667C1.95942 0 1.28115 0.280951 0.781048 0.781048C0.280951 1.28115 0 1.95942 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H9.33333C9.68696 24 10.0261 23.8595 10.2761 23.6095C10.5262 23.3594 10.6667 23.0203 10.6667 22.6667Z" fill="#081C4D" fill-opacity="0.5"/>
<path d="M24.952 12.9333C25.1959 12.6854 25.3328 12.3517 25.3334 12.0039V11.9959C25.3327 11.6437 25.1921 11.306 24.9427 11.0573L19.6094 5.72395C19.4864 5.5966 19.3392 5.49502 19.1766 5.42514C19.0139 5.35527 18.8389 5.31848 18.6619 5.31694C18.4848 5.31541 18.3093 5.34914 18.1454 5.41618C17.9816 5.48322 17.8327 5.58223 17.7075 5.70742C17.5823 5.83261 17.4833 5.98148 17.4163 6.14534C17.3492 6.3092 17.3155 6.48477 17.317 6.66181C17.3186 6.83885 17.3553 7.01381 17.4252 7.17648C17.4951 7.33916 17.5967 7.48628 17.724 7.60928L20.7814 10.6666H8.00002C7.6464 10.6666 7.30726 10.8071 7.05721 11.0571C6.80716 11.3072 6.66669 11.6463 6.66669 11.9999C6.66669 12.3536 6.80716 12.6927 7.05721 12.9428C7.30726 13.1928 7.6464 13.3333 8.00002 13.3333H20.7814L17.724 16.3906C17.4811 16.6421 17.3468 16.9789 17.3498 17.3285C17.3528 17.6781 17.4931 18.0125 17.7403 18.2597C17.9875 18.5069 18.3219 18.6471 18.6715 18.6502C19.0211 18.6532 19.3579 18.5188 19.6094 18.2759L24.9427 12.9426L24.952 12.9333Z" fill="#081C4D" fill-opacity="0.5"/>
</svg>
 
           <div>Logout</div>
         </li>
       </ul>
     </div>
   )}
 </div>
 )
}
 
export default UserProfile
 
