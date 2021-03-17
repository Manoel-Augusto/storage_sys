import { useState, useRef } from 'react';
import { useAuth } from '../../contexts';

export default function FormLogin(){
   const { createSession } = useAuth()
   const [submitOk,setSubmitOk] = useState(false)
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState(''), elPassword = useRef()

   const checkEmailExist = async (e) => {
      if(e.target.value){
         let exist = await fetch(`/api/check-email?email=${e.target.value}`).then(res => res.json())
         if(exist){
            e.target.className = "form-control"
            setSubmitOk(true)
         }else{
            e.target.className = "form-control is-invalid"
            setSubmitOk(false)
         }
         return
      }
      e.target.className = "form-control"
      setSubmitOk(true)
   }

   const sendData = async(e)=>{
      e.preventDefault()
      let {error, ...rest} = await fetch('/api/auth', {
         method:'POST',
         body:JSON.stringify({email,password}),
         headers:{'Content-Type': 'application/json'}
      }).then(res => res.json())
      if(!error){
         await createSession(rest)
         return
      }
      elPassword.current.className = "form-control is-invalid"
   }

   return(
      <div className="col-lg-4 mb-5">
         <div className="card">
            <div className="card-header">
               Login
            </div>
            <div className="card-body">
               <form onSubmit={sendData}>
                  <div className="mb-3">
                     <label htmlFor="email" className="form-label">E-mail</label>
                     <input className="form-control"
                        type="email"
                        id="email"
                        onBlur={(e) => checkEmailExist(e)}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                     />
                     <div className="invalid-feedback">
                        Usuário não existe em nossa base. Cadastre-se.
                     </div>
                  </div>
                  <div className="mb-3">
                     <label htmlFor="password" className="form-label">Senha</label>
                     <input className="form-control"
                        type="password"
                        id="password"
                        ref={elPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                     />
                     <div className="invalid-feedback">
                        Senha inválida.
                     </div>
                  </div>
                  <button type="submit" className={`btn btn-primary ${!submitOk ? 'disabled' : ''}`}>Acessar</button>
               </form>
            </div>
         </div>
      </div>
   );
}
