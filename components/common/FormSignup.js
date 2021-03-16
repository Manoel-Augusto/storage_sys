import { useState, useRef } from 'react';

export default function FormSignup(){
   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState(''),
      elPassword = useRef(null)
   const [passwordVerify,setPasswordVerify] = useState(''),
      elPasswordVerify = useRef(null)
   const [dropboxToken,setDropboxToken] = useState('')
   const [sent,setSent] = useState(false)
   const [error,setError] = useState(false)

   const checkEmailExist = async (e) => {
      if(e.target.value){
         let exist = await fetch(`/api/check-email?email=${e.target.value}`)
         exist = await exist.json()
         if(!exist){
            e.target.className = "form-control"
            setError(false)
         }else{
            e.target.className = "form-control is-invalid"
            e.target.focus()
            setError(true)
         }
         return
      }
      e.target.className = "form-control"
      setError(false)
   }

   const passCompare = (value) => {
      if(value !== password || value !== passwordVerify){
         elPasswordVerify.current.className = "form-control is-invalid"
         setError(true)
      }else{
         elPasswordVerify.current.className = "form-control"
         setError(false)
      }
   }

   const sendData = async(e)=>{
      e.preventDefault()
      let rt = await fetch('/api/register', {
         method:'POST',
         body:JSON.stringify({
            name,
            email,
            password,
            dropboxToken
         }),
         headers:{'Content-Type': 'application/json'}
      })
      rt = await rt.json()
      setSent(true)
      setError(rt)
   }

   if(sent){
      if(error){
         var sentContent = (
            <div className="alert alert-success text-center">
               Usuário cadastrado!
            </div>
         )
      }else{
         var sentContent =  (
            <div className="alert alert-danger text-center">
               Usuário não foi cadastrado!
            </div>
         )
      }
   }

   return(
      <div className="col-lg-4 ms-lg-5">
         <div className="card">
            <div className="card-header">
               Cadastre-se
            </div>
            <div className="card-body">
               {sentContent ?
                     sentContent
                     :
                        <form onSubmit={sendData}>
                           <div className="mb-3">
                              <label htmlFor="name" className="form-label">Nome*</label>
                              <input className="form-control"
                                 type="text"
                                 id="name"
                                 onChange={(e) => setName(e.target.value)}
                                 value={name}
                                 required
                              />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="email" className="form-label">E-mail*</label>
                              <input className="form-control"
                                 type="email"
                                 id="email"
                                 onBlur={(e) => checkEmailExist(e)}
                                 onChange={(e) => setEmail(e.target.value)}
                                 value={email}
                                 required
                              />
                              <div className="invalid-feedback">
                                 Usuário já existe.
                              </div>
                           </div>
                           <div className="mb-3">
                              <label htmlFor="password" className="form-label">Senha*</label>
                              <input className="form-control"
                                 type="password"
                                 id="password"
                                 name="password"
                                 ref={elPassword}
                                 maxLength="100"
                                 onBlur={e => passCompare(e.target.value)}
                                 onChange={(e) => setPassword(e.target.value)}
                                 value={password}
                                 required
                              />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="passwordVerify" className="form-label">Confirmar senha*</label>
                              <input className="form-control"
                                 type="password"
                                 id="passwordVerify"
                                 name="passwordVerify"
                                 ref={elPasswordVerify}
                                 maxLength="100"
                                 onBlur={e => passCompare(e.target.value)}
                                 onChange={(e) => setPasswordVerify(e.target.value)}
                                 value={passwordVerify}
                                 required
                              />
                              <div className="invalid-feedback">
                                 Atenção Senhas não Coincidem
                              </div>
                           </div>
                           <div className="mb-3">
                              <label htmlFor="dropboxToken" className="form-label">Token do Dropbox*</label>
                              <input className="form-control"
                                 type="text"
                                 id="dropboxToken"
                                 onChange={(e) => setDropboxToken(e.target.value)}
                                 value={dropboxToken}
                                 required
                              />
                           </div>
                           <button type="submit" className={`btn btn-primary ${error ? 'disabled' : ''}`}>Cadastrar</button>
                        </form>
               }
            </div>
         </div>
      </div>
   );
}
