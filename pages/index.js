import { useEffect } from 'react';
import { useData, useAuth } from '../contexts';
import App from '../components/app';
import Login from '../components/login';

export default function Index(){
   const { session, loading} = useAuth()
   const { getData } = useData()

   useEffect(()=>{
      if(session){
         getData()
      }
   },[loading, session])

   return (<>
      {!loading && !session && <Login/> }
      {!loading && session && <App/> }
   </>)
}
