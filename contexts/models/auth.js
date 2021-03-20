import React, { useState, useEffect } from 'react';

const ContextAuth = React.createContext()

function ProviderAuth(props){
   const [session,setSession] = useState()
   const [loading,setLoading] = useState(true)

   useEffect(()=>{
      const handleAuthenticated = async()=>{
         let { error, ...rest} = await (await fetch('/api/check-auth')).json()
         if(!error){
            setSession(rest)
         }
         setLoading(false)
      }
      handleAuthenticated()
   },[])

   const createSession = (user)=>{
      setSession(user)
   }

   const removeSession = async()=>{
      fetch('/api/logout')
      setSession()
   }

   return(
      <ContextAuth.Provider value={{
         session,
         loading,
         setSession,
         setLoading,
         createSession,
         removeSession
      }}>
         {props.children}
      </ContextAuth.Provider>
   )
}

export default ProviderAuth
export { ContextAuth }
