import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router'

const ContextData = React.createContext()

function ProviderData(props){
   const router = useRouter()
   const { slug } = router.query
   const [listRecords, setListRecords] = useState([])
   const [checkAll, setCheckAll] = useState(false)
   const [dataShare, setDataShare] = useState(null)
   const [shared, setShared] = useState(false)

   const elCheckAll = useCallback(el => {
      if(el){
         if(checkAll === null){
            el.indeterminate = true
         }else{
            el.indeterminate = false
         }
      }
   }, [checkAll]);

   const toggleCheck = (ids=[])=>{
      ids = ids.length ? ids :
         listRecords
         .filter(item => checkAll === null ? Boolean(item.selected) : !checkAll != Boolean(item.selected))
         .map(item => item.id)
      let newListRecords = listRecords.map(item => ids.includes(item.id) ? {...item,selected:!item.selected} : item)
      let selectedRecords = newListRecords.filter(item => item.selected)
      setCheckAll(selectedRecords.length < newListRecords.length ? selectedRecords.length ? null : false : !checkAll)
      setListRecords(newListRecords)
   }

   const getData = async()=>{
      let { entries } = await fetch(`/api/get-list-folder/${(slug || []).join('/')}`)
         .then(res => res.json())
      if(entries){
         setListRecords(entries)
         setCheckAll(false)
      }
   }

   const getDataShared = async()=>{
      let { error, folders, files } = await fetch('/api/get-list-shared')
         .then(res => res.json())
      if(!error){
         let data = []
         if(folders.entries){
            data = [...data, ...folders.entries]
         }
         if(files.entries){
            data = [...data, ...files.entries]
         }
         setListRecords(data)
      }
   }

   return(
      <ContextData.Provider value={{
         listRecords,
         setListRecords,
         shared,
         setShared,
         checkAll,
         setCheckAll,
         dataShare,
         setDataShare,
         elCheckAll,
         toggleCheck,
         getData,
         getDataShared,
      }}>
         {props.children}
      </ContextData.Provider>
   )
}
export default ProviderData
export { ContextData }
