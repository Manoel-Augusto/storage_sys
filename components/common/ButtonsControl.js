import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import ModalCreateFolder from './ModalCreateFolder';
import { useData } from '../../contexts';

export default function ButtonsControl({selected}){
   const router = useRouter();
   const { getData } = useData()
   const refModalCreateFolder = useRef(null);
   const refFilesInput = useRef(null);

   useEffect(()=>{
      return () => $(refModalCreateFolder.current).modal('hide')
   },[])

   const handleModalCreateFolder = () => {
      $(refModalCreateFolder.current).modal('toggle')
   }

   const handleFilesInput= (dir=false) => {
      refFilesInput.current.removeAttribute("webkitdirectory");
      refFilesInput.current.removeAttribute("directory");
      if(dir){
         refFilesInput.current.setAttribute("webkitdirectory", "true");
         refFilesInput.current.setAttribute("directory", "true");
      }
      refFilesInput.current.click()
   }


   const filesUpload = async(files)=>{
      let linkPath = router.asPath.split('/');
      linkPath = linkPath.filter(item => item.length)
      files = [].slice.call(files);
      for(let file of files){
         const data = new FormData()
         const folder = `${linkPath.length ? `/${linkPath.join('/')}` : ''}/`
         data.append('file', file, file.name)
         data.append('path', `${folder}${file.webkitRelativePath ? file.webkitRelativePath : file.name}`)
         let rt = await fetch('/api/upload', {method:'POST', body:data});
      }
      getData()
   }

   return (
      <div>
         <button className="btn btn-primary" onClick={() => handleModalCreateFolder()}>Criar Pasta</button>
         <ModalCreateFolder refModal={refModalCreateFolder} handleModal={handleModalCreateFolder}/>
         {!selected && selected !== null ?
            <div className="d-inline ms-4">
               <div className="btn-group">
                  <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Enviar</button>
                  <ul className="dropdown-menu">
                     <li><button className="dropdown-item" onClick={() => handleFilesInput()}>Enviar Arquivos</button></li>
                     <li><button className="dropdown-item" onClick={() => handleFilesInput(true)}>Enviar Pasta</button></li>
                  </ul>
               </div>
               <input type="file" ref={refFilesInput} onChange={(e) => filesUpload(e.target.files)} multiple hidden/> 
            </div>
            :
            <div className="d-inline ms-4">
               <button className="btn btn-secondary">Baixar</button>
               <button className="btn btn-secondary ms-2">Excluir</button>
            </div>
         }
      </div>
   );
};
