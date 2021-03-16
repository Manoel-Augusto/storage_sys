import { useState } from 'react';
import { useAuth } from '../../contexts';
import FormLogin from '../common/FormLogin';
import FormSignup from '../common/FormSignup';

export default function Index(){
   return(
      <div className="container">
         <div className="row justify-content-center my-5">
            <FormLogin/>
            <FormSignup/>
         </div>
      </div>
   );
}
