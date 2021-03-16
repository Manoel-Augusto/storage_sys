import React, { useState, useEffect, useCallback} from 'react';

const ContextMain = React.createContext()

function ProviderMain(props){
   const [isMobile, setIsMobile] = useState(false)

   const handleMobile = (size)=> setIsMobile(size <= 990 || false)

   const handleWidthResize = useCallback(event => {
      handleMobile(innerWidth)
      addEventListener('resize', ()=>{ handleMobile(innerWidth) })
   }, []);

   useEffect(()=>{
      handleWidthResize()
      return () => {removeEventListener('resize', ()=>{ handleMobile(innerWidth) })}
   },[handleWidthResize])

   return(
      <ContextMain.Provider value={{
         isMobile,
      }}>
         {props.children}
      </ContextMain.Provider>
   )
}
export default ProviderMain
export { ContextMain }
