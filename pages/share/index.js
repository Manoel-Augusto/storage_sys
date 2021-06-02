import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useData, useAuth } from '../../contexts';
import Login from '../../components/login';
import App from '../../components/app';

export default function Index(){
   const router = useRouter()
   const { session, loading} = useAuth()
   const { getDataShared, setShared } = useData()

   useEffect(()=>{
      if(session){
         setShared(true)
         getDataShared()
      }
   },[loading, session, router])

   return (<>
      {!loading && !session && <Login/> }
      {!loading && session && <App/> }
   </>)
}
