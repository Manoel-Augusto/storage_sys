import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useData } from '../../contexts';

export default function ButtonsUpload(){
   const router = useRouter();
   const { getData } = useData()
   const refFilesInput = useRef(null);

   const handleFilesInput= (dir=false) => {
      refFilesInput.current.removeAttribute("webkitdirectory");
      refFilesInput.current.removeAttribute("directory");
      if(dir){
         refFilesInput.current.setAttribute("webkitdirectory", "true");
         refFilesInput.current.setAttribute("directory", "true");
      }
      refFilesInput.current.click()
   }

   const filesUpload = async(files)=>{
      let linkPath = router.asPath.split('/');
      linkPath = linkPath.filter(item => item.length)
      const folder = `${linkPath.length ? `/${linkPath.join('/')}` : ''}/`
      for(let file of [...files]){
         const form = new FormData()
         form.append('file', file, file.name)
         form.append('path', `${folder}${file.webkitRelativePath ? file.webkitRelativePath : file.name}`)
         let {error} = await fetch('/api/upload', {method:'POST', body:form}).then(res => res.json());
         console.log(error)
      }
      getData()
   }

   return (<>
      <div className="btn-group">
         <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Enviar</button>
         <ul className="dropdown-menu">
            <li>
               <button className="dropdown-item"
                  onClick={() => handleFilesInput()}>
                  Enviar Arquivos
               </button>
            </li>
            <li>
               <button className="dropdown-item"
                  onClick={() => handleFilesInput(true)}>
                  Enviar Pasta
               </button>
            </li>
         </ul>
      </div>
      <input type="file" 
         ref={refFilesInput} 
         onChange={(e) => filesUpload(e.target.files)} 
         value="" 
         multiple
         hidden/>
   </>)
}
