// Import from react
import React, {useState, useContext} from 'react'

// Create navbar Context
const NavBarContext = React.createContext()

export function useNavBar() {
    return useContext(NavBarContext)
}

export function NavbarProvider({ children }) {

    // useState
    const [navBarState, setNavBarState] = useState(false)

    const obj={
        navBarState, 
        setNavBarState
    }

    return (
        <NavBarContext.Provider value={obj}>
        {children}
      </NavBarContext.Provider>
    )
}

