import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

export default function Index(){
   const router = useRouter()
   const { slug } = router.query
   const [file, setFile] = useState(null)

   useEffect(async()=>{
      let {error, ...rest} = await fetch(`/api/share-link?link=${encodeURIComponent(slug)}`).then(r => r.json())
      if(!error) setFile(rest)
   },[])

   const handleDownload = async() => {
      let {user_id, file_id, name, type} = file
      let rt = await fetch('/api/share-download', {
         method:'POST',
         body:JSON.stringify({user_id, file_id, type}),
         headers:{'Content-Type': 'application/json'}
      }).then(r => r.blob())
      const link = document.createElement('a')
      const url = window.URL.createObjectURL(rt)
      link.href = url
      link.setAttribute('download', type==='file' ? name : `${name}.zip`)
      document.body.appendChild(link)
      link.click()
   }

   return (
      <div className="container">
         <div className="row justify-content-center mt-5">
            <div className="col-4 text-center">
               {file ? <>
                  <h1>{file.name}</h1>
                  <button className="btn btn-primary" onClick={() => handleDownload()}>Baixar</button>
               </>:
               <h1>Nada foi encontrado</h1>
               }
            </div>
         </div>
      </div>
   )
}
