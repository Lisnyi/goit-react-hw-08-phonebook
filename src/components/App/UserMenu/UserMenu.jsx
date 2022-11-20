import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import stringAvatar from 'utils/UserAvatar/UserAvatar';
import { getUser, getIsLogin } from 'redux/auth/auth-selectors'
import { logout } from 'redux/auth/auth-operations'
import { LogoutButton, UserMenuConteiner } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const isLogin = useSelector(getIsLogin)

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    isLogin &&  <>
                  <Avatar {...stringAvatar(user.name)} />
                  <UserMenuConteiner>
                    <b>{user.email}</b>
                    <LogoutButton variant="outlined" size="small" onClick={onLogout}>Logout</LogoutButton>
                  </UserMenuConteiner>
                </>
  )
}
