import { Outlet, NavLink } from "react-router-dom"
import { Suspense } from "react"
import UserMenu from "components/App/UserMenu/UserMenu"
import Header from "./SharedLayout.styled"

export default function SharedLayout() {
  return (
    <>
        <Header>
          <nav>
            <NavLink to="/register" end>Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
          <UserMenu/>
        </Header>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet/>
        </Suspense>
    </>
  )
}