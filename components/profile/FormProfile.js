import { useState, useEffect, useRef } from 'react';
import { ContextData, useAuth } from '../../contexts';

export default function FormProfile(){
   const { session, setSession } = useAuth()

   const [password,setPassword] = useState(''),
      elPassword = useRef(null)
   const [passwordVerify,setPasswordVerify] = useState(''),
      elPasswordVerify = useRef(null)
   const [sent,setSent] = useState(false)
   const [error,setError] = useState(false)

   const passCompare = (value) => {
      if(value !== password || value !== passwordVerify){
         elPasswordVerify.current.className = "form-control is-invalid"
         setError(true)
         setSent(false)
      }else{
         elPasswordVerify.current.className = "form-control"
         setError(false)
      }
   }

   const sendData = async(e)=>{
      e.preventDefault()
      let {name, dropboxToken} = session
      let data = {name, dropboxToken}
      if(password.trim()){
         data = {...data, password}
      }
      let rt = await fetch('/api/user', {
         method:'PUT', 
         headers:{'Content-Type': 'Application/json'},
         body:JSON.stringify(data)
      }).then(res => res.json())
      setSent(true)
      setError(!rt)
   }

   if(sent){
      setTimeout(function(){ setSent(false); setError(false) }, 4000);
      if(!error){
         var sentContent = (
            <div className="alert alert-success mt-3">
               Usuário atualizado!
            </div>
         )
      }else{
         var sentContent =  (
            <div className="alert alert-danger mt-3">
               Usuário não foi atualizado!
            </div>
         )
      }
   }

   return (
      <div className="col-lg-5">
         <div className="card">
            <div className="card-header">
               Perfil
            </div>
            <div className="card-body">
               {sentContent}
               <form onSubmit={sendData}>
                  <div className="mb-3">
                     <label htmlFor="name" className="form-label">Nome</label>
                     <input className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setSession({...session, [e.target.name]:e.target.value})}
                        value={session.name || ''}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="email" className="form-label">E-mail</label>
                     <input className="form-control"
                        type="email"
                        id="email"
                        value={session.email || ''}
                        readOnly
                     />
                     <div className="invalid-feedback">
                        Usuário já existe.
                     </div>
                  </div>
                  <div className="mb-3">
                     <label htmlFor="password" className="form-label">Senha</label>
                     <input className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        ref={elPassword}
                        maxLength="100"
                        onBlur={e => passCompare(e.target.value)}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="passwordVerify" className="form-label">Confirmar senha</label>
                     <input className="form-control"
                        type="password"
                        id="passwordVerify"
                        name="passwordVerify"
                        ref={elPasswordVerify}
                        maxLength="100"
                        onBlur={e => passCompare(e.target.value)}
                        onChange={(e) => setPasswordVerify(e.target.value)}
                        value={passwordVerify}
                     />
                     <div className="invalid-feedback">
                        Atenção Senhas não Coincidem
                     </div>
                  </div>
                  <div className="mb-3">
                     <label htmlFor="dropboxToken" className="form-label">Token do Dropbox</label>
                     <input className="form-control"
                        type="text"
                        id="dropboxToken"
                        name="dropboxToken"
                        onChange={(e) => setSession({...session, [e.target.name]:e.target.value})}
                        value={session.dropboxToken || ''}
                     />
                  </div>
                  <button type="submit" className={`btn btn-primary ${error && !sent ? 'disabled' : ''}`}>Salvar</button>
               </form>
            </div>
         </div>
      </div>
   )
}
