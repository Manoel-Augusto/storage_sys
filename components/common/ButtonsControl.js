import { useEffect, useRef } from 'react';

export default function ButtonsControl({selected}){
   const refModal = useRef(null);

   const handleModal = (index) => {
      $(refModal.current).modal('toggle')
   }

   return (
      <div>
         <button className="btn btn-primary" onClick={() => handleModal()}>Criar Pasta</button>
         <div className="modal fade" ref={refModal}>
            <div className="modal-dialog modal-lg">
               <div className="modal-content">
                  Hello
               </div>
            </div>
         </div>
         {!selected && selected !== null ?
            <div className="d-inline ms-4">
               <div className="btn-group">
                  <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Enviar</button>
                  <ul className="dropdown-menu">
                     <li><a href="#" className="dropdown-item">Enviar Arquivos</a></li>
                     <li><a href="#" className="dropdown-item">Enviar Pasta</a></li>
                  </ul>
               </div>
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
