import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateUsername, getUsersdata } from '../redux/reducers/users'
import Navbar from './navbar/navbar'

const Users = () => {

  const name = useSelector((s) => s.users.name)
   const repoList = useSelector((s) => s.users.list)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsersdata())
  }, [])

     return (
    <div>
      <Navbar />
      <input
        type="text"
        className="border-black border-2"
        onChange={(e) => {
          dispatch(updateUsername(e.target.value))
        }}
        value={name}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(getUsersdata())
          }
        }}
      />

      {repoList.map((it) => {
        return <div key="repoName">{it.name}</div>
      })}
    </div>
  )}

export default Users