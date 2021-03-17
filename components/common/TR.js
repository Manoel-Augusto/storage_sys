import Link from 'next/link';

const ICONFOLDER = <i aria-hidden className="text-info fas fa-2x fa-folder"></i>;
const ICONNOTFOUND = <i aria-hidden className="text-secondary fas fa-2x fa-file"></i>;
const ICONFILE = [
   {
      types: ['pdf'],
      tag: <i aria-hidden className="text-danger fas fa-2x fa-file-pdf"></i>,
   },
   {
      types: ['zip','arj','cab','rar','tar','z','gz','taz','tgz'],
      tag: <i aria-hidden className="text-warning fas fa-2x fa-file-archive"></i>,
   },
   {
      types: ['js'],
      tag: <i aria-hidden className="text-secondary fas fa-2x fa-file-code"></i>,
   }

]

export default function TR({data, handleCheck}){
   if(data[".tag"] === "folder"){
      var icon = ICONFOLDER
   }else{
      let ext = data.name.split(".").slice(-1).join("")
      var icon = ICONFILE.find(item => item.types.includes(ext))
      icon = icon && icon.tag || ICONNOTFOUND
   }
   return(
      <tr className={data.selected ? 'no-hover table-warning' : ''}>
         <td style={{ borderWidth: 0 }} className="text-center pt-3">
            <input className="form-check-input" 
               type="checkbox" 
               checked={Boolean(data.selected)}
               onChange={() => handleCheck([data.id])}/>
         </td>
         <td>
            {data[".tag"] === "folder" ? 
               <Link href={data.path_lower}>
                  <a className="link-dark">
                     <div className="d-inline me-2">{icon}</div>
                     <div className="d-inline">{data.name.replace(/(.{35})..+/, "$1...")}</div>
                  </a>
               </Link>
               :
               <>
                  <div className="d-inline me-2">{icon}</div>
                  <div className="d-inline">{data.name.replace(/(.{35})..+/, "$1...")}</div>
               </>
            }
         </td>
         <td>{data.client_modified ? new Date(data.client_modified).toLocaleString() : "--"}</td>
      </tr>
   )
}
