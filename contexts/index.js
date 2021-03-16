import { useContext } from "react"
import ProviderMain, { ContextMain } from './models/main';
import ProviderData, { ContextData } from './models/data';
import ProviderAuth, { ContextAuth } from './models/auth';

export function useAuth() {
   return useContext(ContextAuth)
}
export function useData() {
   return useContext(ContextData)
}
export function useMain() {
   return useContext(ContextMain)
}


const ProviderGlobal = (props) => (
   <ProviderMain>
      <ProviderAuth>
         <ProviderData>
            {props.children}
         </ProviderData>
      </ProviderAuth>
   </ProviderMain>
)

export default ProviderGlobal
