import User from '../common/User';
import Breadcrumbs from '../common/Breadcrumbs';
import ButtonsControl from '../common/ButtonsControl'
import Table from '../common/Table';
import TableShared from '../common/TableShared';
import { useAuth, useData } from '../../contexts';

export default function Index({share}){
   const { session, removeSession } = useAuth()
   const { checkAll, shared } = useData()

   return (
      <div className="container">
         <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid">
               <Breadcrumbs/>
               <User logout={removeSession} session={session}/>
            </div>
         </nav>
         {!shared &&
         <div className="row mb-3">
            <div className="col">
               <ButtonsControl selected={checkAll}/>
            </div>
         </div>
         }
         <div className="row">
            <div className="col">
               {!shared ?
                  <Table/>
                  :
                  <TableShared/>
               }
            </div>
         </div>
      </div>
   )
}
