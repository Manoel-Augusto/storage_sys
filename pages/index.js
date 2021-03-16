import { useEffect } from 'react';
import { useData, useAuth } from '../contexts';
import App from '../components/app';
import Login from '../components/login';

export default function Index(){
   const { session, authenticated } = useAuth()
   const { setListRecords, setCheckAll } = useData()

   useEffect(async()=>{
      if(authenticated && session){
         let { entries } = await (await fetch(`/api/get-list-folder`,{headers: {'Authorization':`Bearer ${session.token}`}})).json()
         if(entries){
            setListRecords(entries)
            setCheckAll(false)
         }
      }
   },[authenticated])

   if(!authenticated){
      return (
         <Login/>
      )
   }

   return (
      <App/>
   )
}
