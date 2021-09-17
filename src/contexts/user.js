// import from react''
import React, {useContext, useState, useEffect} from 'react'

// import from libraries
import axios from 'axios'

// create auth Context
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    // useState
    const [currentUser, setCurrentUser] = useState(null)

    // functions
    const signup = async (userName, password, token) => {
        const res=await axios.post(`${process.env.REACT_APP_URL_MASTER}/users`,
        { name:userName, password:password },
        {
            headers:{
                token: token
            }
        })
        return res
    }

    const sign_in = async (userName, password) => {
        const res=await axios.post(`${process.env.REACT_APP_URL_MASTER}/signin`,
        { name: userName, password: password })
        setCurrentUser(res.data)
        // save token on localStorage
        localStorage.setItem('user', JSON.stringify(res.data))
        return res
    }

    const logout = async () => {
    /*    const res = await axios.post(`${process.env.REACT_APP_URL_MASTER}/signout`,
        {
            headers:{
                token: localStorage.getItem('token')
            }
        })
        console.log(res)*/
        localStorage.clear()
        setCurrentUser(null)
    }

    const updateCount = async (userName, password, token, id) => {

        const res=await axios.put(`${process.env.REACT_APP_URL_MASTER}/users/${id}`,
        { name: userName, password: password },
        {
            headers:{
                token: token
            }
        })
        setCurrentUser(res.data)
        return res
      }

    useEffect(()=>{
        if(localStorage.getItem('user')!=null){
            setCurrentUser(JSON.parse(localStorage.getItem('user')))
        }
    },[])

    const value = {
        currentUser,
        sign_in,
        signup,
        logout,
        updateCount,
        logout
      }

    return (
        <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
}

