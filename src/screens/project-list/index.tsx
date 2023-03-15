import React,{ useEffect, useState } from "react"
import { cleanObject, useDebounce } from "../../utils"
import List from "./list"
import SearchPanel from "./search-panel"
import * as qs from 'qs'

const api = process.env.REACT_APP_API_URL

const ProjectList = (props:any) => {

  
  const [param, setParam] = useState({name: '', personId: ''})
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const debounceValue = useDebounce(param, 1000)

  useEffect(() => {
    fetch(`${api}/projects?${qs.stringify(cleanObject(debounceValue))}`).then( async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debounceValue])

  useEffect(() => {
    fetch(`${api}/users`).then( async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  return (
    <>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </>
  )
}

export default ProjectList