import LoginForm from "components/App/LoginForm/LoginForm"
import { useDispatch } from "react-redux"
import { login } from "redux/auth/auth-operations"

export default function Login() {
  const dispatch = useDispatch()

  const onLogin = (data) => {
    dispatch(login(data));
  }

  return (
  <div>
    <h1>Login page</h1>
    <LoginForm onSubmit={onLogin}/>
  </div>
  )
}
