import { useRef, useEffect } from 'react';
import { useData } from '../../contexts';
import TRShared from './TRShared'

export default function TableShared(){
   const {
      listRecords,
      getDataShared,
   } = useData()

   if(!listRecords || !listRecords.length){
      return(
         <div className="alert alert-warning" role="alert">
            Esta pasta está vazia
         </div>
      )
   }

   const handleDownload = async(data) => {
      let {preview_url, path_lower, [".tag"]:type, name} = data
      let rt = await fetch('/api/download', {
         method:'POST',
         body:JSON.stringify({path: path_lower || preview_url, type, shared: true}),
         headers:{'Content-Type': 'application/json'}
      }).then(r => r.blob())
      const link = document.createElement('a')
      const url = window.URL.createObjectURL(rt)
      link.href = url
      link.setAttribute('download', type === 'file' ? name : `${name}.zip`)
      document.body.appendChild(link)
      link.click()
   }

   const mountFolder = async (data) => {
      let { shared_folder_id } = data
      let {error, ...rest} = await fetch('/api/mount-folder', {
         method:'POST',
         body:JSON.stringify({shared_folder_id}),
         headers:{'Content-Type': 'application/json'}
      }).then(res => res.json())
      if(!error){
         getDataShared()
      }
   }

   return(<>
      <div className="row">
         <div className="col">
            <table className="table table-hover">
               <thead>
                  <tr>
                     <th>Nome</th>
                     <th>Modificado</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {listRecords.map((item,index) => 
                  <TRShared key={index} data={item} mountFolder={mountFolder} handleDownload={handleDownload}/>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   </>);
}
