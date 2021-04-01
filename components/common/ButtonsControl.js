import { useEffect, useRef } from 'react';
import ModalCreateFolder from './ModalCreateFolder';
import ButtonsUpload from './ButtonsUpload';

export default function ButtonsControl({selected}){
   const refModalCreateFolder = useRef(null);

   useEffect(()=>{
      return () => $(refModalCreateFolder.current).modal('hide')
   },[])

   const handleModalCreateFolder = () => {
      $(refModalCreateFolder.current).modal('toggle')
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
               <button className="btn btn-secondary">Baixar</button>
               <button className="btn btn-secondary ms-2">Excluir</button>
            </div>
         }
      </div>
   );
};
