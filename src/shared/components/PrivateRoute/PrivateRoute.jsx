import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { getIsLogin } from "redux/auth/auth-selectors"

export default function PrivateRoute() {
    const isLogin = useSelector(getIsLogin)

    if (!isLogin) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}