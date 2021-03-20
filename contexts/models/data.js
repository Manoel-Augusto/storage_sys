import React, { useState, useEffect, useCallback } from 'react';

const ContextData = React.createContext()

function ProviderData(props){
   const [listRecords, setListRecords] = useState([])
   const [checkAll, setCheckAll] = useState(false)

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

   const getData = async(slug=[])=>{
      let { entries } = await fetch(`/api/get-list-folder/${slug.join('/')}`).then(res => res.json())
      if(entries){
         setListRecords(entries)
         setCheckAll(false)
      }
   }

   return(
      <ContextData.Provider value={{
         listRecords,
         setListRecords,
         checkAll,
         setCheckAll,
         elCheckAll,
         toggleCheck,
         getData,
      }}>
         {props.children}
      </ContextData.Provider>
   )
}
export default ProviderData
export { ContextData }
