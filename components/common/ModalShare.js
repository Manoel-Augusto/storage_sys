import { useState, useEffect } from 'react';
import { useData } from '../../contexts';

export default function ModalShare({refModal, handleModal}){
   const { dataShare, getData } = useData()
   const [active,setActive] = useState(false)
   const [link,setLink] = useState('')
   const [type, setType] = useState('link')
   const [email, setEmail] = useState('')
   const [loading,setLoading] = useState(false)

   useEffect(()=>{
      return () => $(refModal.current).modal('hide')
   },[])

   useEffect(()=>{
      if(dataShare){
         let { shared_link } = dataShare
         if(shared_link) setActive(true)
         setLink(`${location.origin}/share/${encodeURIComponent(shared_link)}`)
      }
   },[dataShare])


   useEffect(async()=>{
      if(dataShare){
         let {id, name, [".tag"]:type} = dataShare
         let {error, ...rest} = await fetch('/api/share-link', {
            method:'POST',
            body:JSON.stringify({id, name, type, active}),
            headers:{'Content-Type': 'application/json'}
         }).then(res => res.json())
         if(!error){
            setLink(`${location.origin}/share/${encodeURIComponent(rest.link)}`)
         }
      }
   },[active])

   const handleAddCollaborator = async (e)=>{
      e.preventDefault()
      setLoading(true)
      let {[".tag"]: type, id, path_display} = dataShare
      let { error, ...rest } = await fetch('/api/add-member', {
         method: 'POST',
         body: JSON.stringify({ id, path: path_display, email, type }),
         headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json())
      if(!error){
         getData()
         $(refModal.current).modal('hide')
      }
      setLoading(false)
   }

   if (type == "link") {
      var content = (
         <div className="mb-3">
            <div className="form-check form-switch">
               <input className="form-check-input"
                  type="checkbox"
                  id="switchActive"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)} />
               <label className="form-check-label" htmlFor="switchActive">Ativar compartilhamento</label>
            </div>
            {active &&
            <div className="my-4">
               Link: <a href={link} target="_blank">{link.replace(/(.{35})..+/, "$1...")}</a>
            </div>
            }
         </div>
      )
   } else {
      var content = (
         <form onSubmit={handleAddCollaborator}>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">E-mail</label>
               <input type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  placeholder="Digite o e-mail"
                  required
               />
            </div>
            <button type="submit" className="btn btn-primary mb-3" disabled={loading}>
               {loading ?
                  <i className="fas fa-spinner fa-pulse"></i>
                  :
                     "Adicionar"
               }
            </button>
         </form>
      )
   }

   return (
      <div className="modal fade" ref={refModal}>
         <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Compartinhamento</h5>
                  <button className="btn-close" onClick={() => handleModal()}></button>
               </div>
               <div className="modal-body">
                  <select className="form-select mb-4" value={type} onChange={(e) => setType(e.target.value)}>
                     <option value="link">Link</option>
                     <option value="people">Adicionar colaborador</option>
                  </select>
                  {content}
               </div>
            </div>
         </div>
      </div>
   )
}
