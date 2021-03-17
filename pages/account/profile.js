import { useEffect, useContext } from 'react';
import { ContextData, useAuth } from '../../contexts';
import Login from '../../components/login';
import ContainerProfile from '../../components/profile';

export default function Profile(){
   const { session, loading} = useAuth()

   return (<>
      {!loading && !session && <Login/> }
      {!loading && session && <ContainerProfile/> }
   </>)
}
