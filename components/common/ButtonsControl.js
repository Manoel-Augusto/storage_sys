import { useEffect, useRef } from 'react';
import ModalCreateFolder from './ModalCreateFolder';
import ButtonsUpload from './ButtonsUpload';
import { useData } from '../../contexts';

export default function ButtonsControl({selected}){
   const { listRecords, getData } = useData()
   const refModalCreateFolder = useRef(null);

   useEffect(()=>{
      return () => $(refModalCreateFolder.current).modal('hide')
   },[])

   const handleModalCreateFolder = () => {
      $(refModalCreateFolder.current).modal('toggle')
   }

   const handleDownload = async() => {
      let listSelected = listRecords.filter(item => item.selected)
      for(let record of listSelected){
         let rt = await fetch('/api/download', {
            method:'POST',
            body:JSON.stringify({path: record.path_display, type: record[".tag"]}),
            headers:{'Content-Type': 'application/json'}
         }).then(r => r.blob())
         const link = document.createElement('a')
         const url = window.URL.createObjectURL(rt)
         link.href = url
         link.setAttribute('download', record[".tag"]==='file' ? record.name : `${record.name}.zip`)
         document.body.appendChild(link)
         link.click()
      }
   }

   const handleDelete = async() => {
      let listSelected = listRecords.filter(item => item.selected)
      for(let record of listSelected){
         let {error, ...rest} = await fetch('/api/delete', {
            method:'POST',
            body:JSON.stringify({path: record.path_display}),
            headers:{'Content-Type': 'application/json'}
         }).then(r => r.json())
         if(!error){
            getData()
         }
      }
   }

   return (
      <div>
         <button className="btn btn-primary" onClick={() => handleModalCreateFolder()}>Criar Pasta</button>
         <ModalCreateFolder refModal={refModalCreateFolder} handleModal={handleModalCreateFolder}/>
         {!selected && selected !== null ?
            <div className="d-inline ms-4">
               <ButtonsUpload/>
            </div>
            :
            <div className="d-inline ms-4">
               <button className="btn btn-secondary" onClick={() => handleDownload()}>Baixar</button>
               <button className="btn btn-secondary ms-2" onClick={() => handleDelete()}>Excluir</button>
            </div>
         }
      </div>
   );
};
