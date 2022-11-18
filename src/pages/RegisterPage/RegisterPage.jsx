import RegisterForm from "components/App/RegisterForm/RegisterForm"
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";


export default function Register() {
  const dispatch = useDispatch()

  const onRegister = (data) => {
    dispatch(signup(data));
  }

  return (
    <div>
      <h1>Register page</h1>
      <RegisterForm onSubmit={onRegister}/>
    </div>
  )
}