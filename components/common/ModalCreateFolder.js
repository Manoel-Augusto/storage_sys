import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useData } from '../../contexts';

export default function ModalCreateFolder({refModal, handleModal}){
   const router = useRouter();
   const { getData } = useData()
   const refSubmit = useRef(null)
   const refName = useRef(null)
   const [name,setName] = useState('')
   const [errorMsg,setErrorMsg] = useState('')

   useEffect(()=>{
      refModal.current.addEventListener('hidden.bs.modal', function(e) {
         setName('')
      })
      return () => $(refModal.current).modal('hide')
   },[])

   const createFolder = async(e)=>{
      e.preventDefault()
      let linkPath = router.asPath.split('/');
      linkPath = linkPath.filter(item => item.length)
      let folder = `${linkPath.length ? `/${linkPath.join('/')}` : ''}/${name}`
      let {error, ...rest} = await fetch('/api/folder', {
         method:'POST',
         body:JSON.stringify({folder}),
         headers:{'Content-Type': 'application/json'}
      }).then(res => res.json())
      if(!error){
         refName.current.className = "form-control"
         getData()
         $(refModal.current).modal('hide')
      }else{
         refName.current.className = "form-control is-invalid"
         setErrorMsg(`Pasta ${name} já existe`)
      }
   }

   return (
      <div className="modal fade" ref={refModal}>
         <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Criar pasta</h5>
                  <button className="btn-close" onClick={() => handleModal()}></button>
               </div>
               <div className="modal-body">
                  <form onSubmit={createFolder}>
                     <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input type="text" 
                           className="form-control" 
                           onChange={(e) => setName(e.target.value)}
                           onBlur={(e) => setName(e.target.value.trim())}
                           ref={refName}
                           value={name}
                           id="name" 
                           placeholder="Nome da pasta"
                           required
                        />
                        <div className="invalid-feedback">
                           {errorMsg}
                        </div>
                     </div>
                     <input ref={refSubmit} type="submit" hidden/>
                  </form>
               </div>
               <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => handleModal()}>Cancelar</button>
                  <button className="btn btn-primary" onClick={() => refSubmit.current.click()}>Criar</button>
               </div>
            </div>
         </div>
      </div>
   )
}
