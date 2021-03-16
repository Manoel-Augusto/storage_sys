import User from '../common/User';
import Breadcrumbs from '../common/Breadcrumbs';
import Table from '../common/Table';
import { useAuth } from '../../contexts';

export default function Index(){
   const { session, removeSession } = useAuth()

   return (
      <div className="container">
         <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid">
               <Breadcrumbs/>
               <User logout={removeSession} session={session}/>
            </div>
         </nav>
         <div className="row">
            <div className="col">
               <Table/>
            </div>
         </div>
      </div>
   )
}
