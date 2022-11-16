import { Routes, Route } from "react-router-dom"
import { lazy } from "react"

const Register = lazy(() => import("pages/Register/Register"))
const Login = lazy(() => import("pages/Login/Login"))
const ContactsPage = lazy(() => import("pages/Contacts/ContactsPage"))
const NotFound = lazy(() => import("pages/NotFound/NotFound"))
const SharedLayout = lazy(() => import("pages/SharedLayout/SharedLayout"))

export default function Navigation () {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="contacts" element={<ContactsPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}