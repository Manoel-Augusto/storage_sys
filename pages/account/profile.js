import { useEffect, useContext } from 'react';
import { ContextData, useAuth } from '../../contexts';
import Login from '../../components/login';
import ContainerProfile from '../../components/profile';

export default function Profile(){
   const { session, setSession, authenticated } = useAuth()

   useEffect(async()=>{
      if(authenticated && session){
         let rt = await (await fetch(`/api/user`,{headers: {'Authorization':`Bearer ${session.token}`}})).json()
         if(rt){
            setSession({...session, ...rt})
         }
      }
   },[authenticated])

   if(!authenticated){
      return (
         <Login/>
      )
   }

   return (
      <ContainerProfile/>
   )
}
