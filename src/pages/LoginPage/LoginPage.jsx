import LoginForm from "components/App/LoginForm/LoginForm"
import { MainTitle, Main, Conteiner, Section } from "components/App/App.styled"

export default function Login() {

  return (
  <Main>
    <Section>
      <Conteiner>
        <MainTitle>Login page</MainTitle>
        <LoginForm/>
      </Conteiner>
    </Section>
  </Main>
  )
}
