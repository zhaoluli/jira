import React,{ useEffect, useState } from "react"


interface SearchPanelProps {
  users: any[],
  param: {
    name: string,
    personId: string,
  },
  setParam: (param: SearchPanelProps['param']) => void

}

const SearchPanel = ({param, setParam, users}: SearchPanelProps) => {

  return (
    <form>
      <div>
        <input type="text" value={param.name} onChange={e => setParam({...param, name: e.target.value})} />
        <select value={param.personId} onChange={e => setParam({...param, personId: e.target.value})}>
          <option value="">负责人</option>
          {
            users.map(item => {
              return <option key={item.id} value={item.id}> {item.name} </option>
            })
          }
        </select>
      </div>
    </form>
  )
}

export default SearchPanel 