import Link from 'next/link';
import { useAuth } from '../../contexts';
import Breadcrumbs from '../common/Breadcrumbs';
import User from '../common/User';
import FormProfile from './FormProfile';

export default function Index(){
   const { session, removeSession } = useAuth()

   return (
      <div className="container">
         <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid">
               <Link href="/"><a className="link-secondary fw-bold px-3">HOME</a></Link>
               <User logout={removeSession} session={session}/>
            </div>
         </nav>
         <div className="row">
            <div className="col">
               <FormProfile/>
            </div>
         </div>
      </div>
   )
}
