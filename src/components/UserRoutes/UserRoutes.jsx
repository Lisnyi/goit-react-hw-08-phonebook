import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import PublicRoute from "shared/components/PublicRoute/PublicRoute"
import PrivateRoute from "shared/components/PrivateRoute/PrivateRoute"
import Navigation from "pages/Navigation/Navigation"

const Register = lazy(() => import("pages/RegisterPage/RegisterPage"))
const Login = lazy(() => import("pages/LoginPage/LoginPage"))
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"))
const NotFound = lazy(() => import("pages/NotFound/NotFound"))

export default function UserRoutes () {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route element={<PublicRoute/>}>
                        <Route path="register" element={<Register/>}/>
                        <Route path="login" element={<Login/>}/>
                    </Route>
                    <Route element={<PrivateRoute/>} >
                        <Route path="contacts" element={<ContactsPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </Suspense>
    )
}