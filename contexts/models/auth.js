import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router'

const ContextAuth = React.createContext()

function ProviderAuth(props){
   const router = useRouter()
   const [session,setSession] = useState(null)
   const [authenticated,setAuthenticated] = useState(false)

   const handleSession = useCallback(async(e) => {
      let ss = JSON.parse(localStorage.getItem("ss"))
      if(ss){
         let authenticated = await (await fetch(`/api/check-auth?token=${ss.token}`)).json()
         setSession(ss)
         setAuthenticated(authenticated)
      }
   }, []);

   useEffect(async()=>{
      handleSession()
   },[handleSession])

   const createSession = (user)=>{
      localStorage.setItem("ss", JSON.stringify(user))
      setSession(user)
      setAuthenticated(true)
   }

   const removeSession = ()=>{
      localStorage.removeItem("ss")
      setSession(null)
      setAuthenticated(false)
   }

   return(
      <ContextAuth.Provider value={{
         session,
         setSession,
         authenticated,
         createSession,
         removeSession
      }}>
         {props.children}
      </ContextAuth.Provider>
   )
}

export default ProviderAuth
export { ContextAuth }
