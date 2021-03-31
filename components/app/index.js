import User from '../common/User';
import Breadcrumbs from '../common/Breadcrumbs';
import ButtonsControl from '../common/ButtonsControl'
import Table from '../common/Table';
import { useAuth, useData } from '../../contexts';

export default function Index(){
   const { session, removeSession } = useAuth()
   const { checkAll } = useData()

   return (
      <div className="container">
         <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid">
               <Breadcrumbs/>
               <User logout={removeSession} session={session}/>
            </div>
         </nav>
         <div className="row mb-3">
            <div className="col">
               <ButtonsControl selected={checkAll}/>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <Table/>
            </div>
         </div>
      </div>
   )
}
