import Link from 'next/link';

export default function User({logout, session}){
   return (
      <div className="dropdown">
         <button className="btn rounded-circle me-3" data-bs-toggle="dropdown">
            <i className="fas fa-user"></i>
         </button>
         <ul className="dropdown-menu dropdown-menu-end">
            <li><h6 className="dropdown-header">{session.name.replace(/(.{25})..+/, "$1...")}</h6></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link href="/account/profile"><a className="dropdown-item">Perfil</a></Link></li>
            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
         </ul>
      </div>
   )
}
