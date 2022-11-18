import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, getIsLogin } from 'redux/auth/auth-selectors'
import { logout } from 'redux/auth/auth-operations'

export default function UserMenu() {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const isLogin = useSelector(getIsLogin)

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    isLogin &&  <div>
                  <p>{user.email}</p>
                  <button onClick={onLogout}>Logout</button>
                </div>
  )
}
