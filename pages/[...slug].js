import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useData, useAuth } from '../contexts';
import App from '../components/app';
import Login from '../components/login';

export default function Index(){
   const router = useRouter()
   const { slug } = router.query
   const { session, loading} = useAuth()
   const { setListRecords, setCheckAll } = useData()

   useEffect(()=>{
      const getData = async()=>{
         if(session){
            let { entries } = await fetch(`/api/get-list-folder/${slug.join('/')}`).then(res => res.json())
            if(entries){
               setListRecords(entries)
               setCheckAll(false)
            }
         }
      }
      getData()
   },[loading, router])


   return (<>
      {!loading && !session && <Login/> }
      {!loading && session && <App/> }
   </>)
}
