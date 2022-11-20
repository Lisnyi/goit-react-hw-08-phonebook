import { useGetContactsQuery } from 'redux/contacts/contacts-api';
import { ContactsForm, ContactsList, Filter } from '../../components'
import { Main, MainTitle, SectionTitle, Conteiner, Section } from 'components/App/App.styled';

export default function ContactsPage () {
  const {data: contacts, isLoading, isSuccess, isError, error} = useGetContactsQuery()

  return (
    <Main>
      <Section>
        <Conteiner>
          <MainTitle>Phonebook</MainTitle>
          <ContactsForm contacts={contacts}/>
        </Conteiner>
      </Section>
      <Section>
        <Conteiner>
          <SectionTitle>Contacts</SectionTitle>
          <Filter/>
          {isSuccess && contacts.length
            ? <ContactsList contacts={contacts}/>
            : null}
          {isLoading && <p>Loading...</p>}
          {isError && <p>{error.message}</p>}
        </Conteiner>
      </Section>
    </Main>
  )
}
