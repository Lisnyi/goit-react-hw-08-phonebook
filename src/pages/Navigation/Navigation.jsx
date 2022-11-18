import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom"
import { Suspense, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getIsLogin, getToken } from "redux/auth/auth-selectors"
import UserMenu from "components/App/UserMenu/UserMenu"
import Header from "./Navigation.styled"
import { current } from "redux/auth/auth-operations"

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLogin = useSelector(getIsLogin)
  const token = useSelector(getToken)

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/register");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (token && !isLogin) {
      dispatch(current())
    }
  }, [dispatch, isLogin, token]);

  return (
    <>
        <Header>
          <nav>    
            {isLogin
              ? <UserMenu/>
              : <>
                  <NavLink to="/register" end>Register</NavLink>
                  <NavLink to="/login">Login</NavLink>
                </>
            } 
          </nav>
        </Header>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet/>
        </Suspense>
    </>
  )
}