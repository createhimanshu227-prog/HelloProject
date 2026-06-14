import React, { useEffect, useState, createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
  
  const [userData, setuserData] = useState(null)
  useEffect(() => {
    setLocalStorage()
      const {employees, admin} = getLocalStorage()
      setuserData (employees)
  },[])
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>

      
    </div>
  )
}

export default AuthProvider

