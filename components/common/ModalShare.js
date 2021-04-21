import { useState, useEffect } from 'react';
import { useData } from '../../contexts';

export default function Modalhare({refModal, handleModal}){
   const { dataShare } = useData()
   const [active,setActive] = useState(false)
   const [link,setLink] = useState('')

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

   return (
      <div className="modal fade" ref={refModal}>
         <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Criar link de compartinhamento</h5>
                  <button className="btn-close" onClick={() => handleModal()}></button>
               </div>
               <div className="modal-body">
                  <div className="mb-3">
                     <div className="form-check form-switch">
                        <input className="form-check-input" 
                           type="checkbox" 
                           id="switchActive"
                           checked={active}
                           onChange={(e) => setActive(e.target.checked)}/>
                        <label className="form-check-label" htmlFor="switchActive">Ativar compartilhamento</label>
                     </div>
                     {active &&
                     <div className="my-4">
                        Link: <a href={link} target="_blank">{link.replace(/(.{35})..+/, "$1...")}</a>
                     </div>
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
