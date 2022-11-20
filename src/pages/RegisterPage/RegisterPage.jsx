import RegisterForm from "components/App/RegisterForm/RegisterForm"
import { MainTitle, Main, Conteiner, Section } from "components/App/App.styled"

export default function Register() {

  return (
    <Main>
      <Section>
        <Conteiner>
          <MainTitle>Register page</MainTitle>
          <RegisterForm/>
        </Conteiner>
      </Section>
    </Main>
  )
}