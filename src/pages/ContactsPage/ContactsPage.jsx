import { useGetContactsQuery } from 'redux/contacts/contacts-api';
import { ContactsForm, ContactsList, Filter } from '../../components'
import { Main, MainTitle, SectionTitle, Conteiner, Section } from 'components/App/App.styled';
import { ThreeDots } from  'react-loader-spinner'

export default function ContactsPage () {
  const {data: contacts, isLoading} = useGetContactsQuery()

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
          {contacts?.length
            ? <ContactsList contacts={contacts}/>
            : null}
          {isLoading && <ThreeDots 
                                height="50" 
                                width="50" 
                                radius="9"
                                color="#2714d3" 
                                ariaLabel="three-dots-loading"
                                visible={true}
                                />}
        </Conteiner>
      </Section>
    </Main>
  )
}
