import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom"
import { Suspense, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getIsLogin, getToken } from "redux/auth/auth-selectors"
import { UserMenu } from "components/App/UserMenu/UserMenu"
import { current } from "redux/auth/auth-operations"
import { Header, HeaderConteiner } from "./Navigation.styled"
import { ThreeDots } from  'react-loader-spinner'


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
          <HeaderConteiner>   
              {isLogin
                ? <UserMenu/>
                : <nav>
                    <NavLink to="/register" end>Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                  </nav>
              }
          </HeaderConteiner>
        </Header>
        <Suspense fallback={<ThreeDots 
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#2714d3" 
                                ariaLabel="three-dots-loading"
                                visible={true}
                                />}>
          <Outlet/>
        </Suspense>
    </>
  )
}