import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useData, useAuth } from '../contexts';
import App from '../components/app';
import Login from '../components/login';

export default function Index(){
   const router = useRouter()
   const { slug } = router.query
   const { session, authenticated } = useAuth()
   const { setListRecords, setCheckAll } = useData()

   useEffect(async()=>{
      if(authenticated && session){
         let { entries } = await (await fetch(`/api/get-list-folder/${slug.join('/')}`,{headers: {'Authorization':`Bearer ${session.token}`}})).json()
         if(entries){
            setListRecords(entries)
            setCheckAll(false)
         }
      }
   },[router, authenticated])

   if(!authenticated){
      return (
         <Login/>
      )
   }

   return (
      <App/>
   )
}
