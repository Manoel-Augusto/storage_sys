import { useRef, useEffect } from 'react';
import { useData } from '../../contexts';
import TR from './TR'

export default function Table(){
   const {
      listRecords,
      elCheckAll,
      checkAll,
      setCheckAll,
      toggleCheck
   } = useData()

   if(!listRecords || !listRecords.length){
      return(
         <div className="alert alert-warning" role="alert">
            Esta pasta está vazia
         </div>
      )
   }

   return(<>
      <div className="row">
         <div className="col">
            <table className="table table-hover">
               <thead>
                  <tr>
                     <th style={{width: "1px", borderWidth: 0}} className="text-center">
                        <input className="form-check-input"
                           type="checkbox"
                           ref={elCheckAll}
                           checked={Boolean(checkAll)}
                           onChange={() => toggleCheck()}/>
                     </th>
                     <th>Nome</th>
                     <th>Modificado</th>
                  </tr>
               </thead>
               <tbody>
                  {listRecords.map((item,index) => <TR key={index} data={item} handleCheck={toggleCheck}/>)}
               </tbody>
            </table>
         </div>
      </div>
   </>);
}
