import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useData, useAuth } from '../contexts';
import App from '../components/app';
import Login from '../components/login';

export default function Index(){
   const router = useRouter()
   const { session, loading} = useAuth()
   const { getData } = useData()

   useEffect(()=>{
      if(session){
         getData()
      }
   },[loading, session, router])

   return (<>
      {!loading && !session && <Login/> }
      {!loading && session && <App/> }
   </>)
}
