import React, { useContext, useEffect, useState } from 'react'


const UserInfo = React.createContext()

export function UserContext({ children }) {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(()=>{


    setUser(JSON.parse(localStorage.getItem('user')))

    setLoading(false)

  },[])

  if (loading) {
    return null;
  }

  

  

  return (
    <UserInfo.Provider value={{ user, setUser }} >
      {children}
    </UserInfo.Provider>
  )
}


export const UserState = () => {
  return useContext(UserInfo)
}