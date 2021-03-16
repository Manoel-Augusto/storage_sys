import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
   return string
      .replace(/-/g, ' ')
      .replace(/oe/g, 'ö')
      .replace(/ae/g, 'ä')
      .replace(/ue/g, 'ü')
      .toUpperCase();
};

export default function Breadcrumbs(){
   const router = useRouter();
   const [breadcrumbs, setBreadcrumbs] = useState(null);

   useEffect(() => {
      if (router) {
         let linkPath = router.asPath.split('/');
         linkPath = linkPath.filter(item => item.length)

         const pathArray = linkPath.map((path, i) => {
            return {
               breadcrumb: path.replace(/(.{20})..+/, "$1..."),
               href: '/' + linkPath.slice(0, i + 1).join('/') };
         });
         pathArray.unshift({ breadcrumb: 'home', href: '/' })

         setBreadcrumbs(pathArray);
      }
   }, [router]);

   if (!breadcrumbs) {
      return null;
   }

   return (
      <ol className="breadcrumb mb-0 px-3">
         {breadcrumbs.map((breadcrumb, i) =>
         <li className="breadcrumb-item my-2" key={i}>
            {i+1 < breadcrumbs.length ?
               <Link href={breadcrumb.href}>
                  <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
               </Link>
               :
               <span className="fw-bold">{convertBreadcrumb(breadcrumb.breadcrumb)}</span>
            }
         </li>
         )}
      </ol>
   );
};
