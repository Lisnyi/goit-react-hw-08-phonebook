import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getFilter } from 'redux/filter'
import { ContactItem } from './ContactsItem/ContactsItem'
import { ContactRegister } from './ContactsList.styled'

export const ContactsList = ({contacts}) => {
    const filter = useSelector(getFilter)

    const getSortedContacts = data => {
      const list = [...data]
      const sortedList = list.sort((a, b) => a.name.localeCompare(b.name));
  
      return sortedList
    }
  
    const getFilteredContacts = data => {
      if (!filter) {
          return data
      }
  
      const normalizedFilter = filter.toLocaleLowerCase()
      const filteredContacts = data.filter(({name}) => {
          const normalizedName = name.toLocaleLowerCase()
          const result = normalizedName.includes(normalizedFilter)
          return result;
      })
  
      return filteredContacts;
    }
  
    const sortedList = getSortedContacts(contacts)
    const contactsList = getFilteredContacts(sortedList)
    
    return  <ContactRegister>
                {contactsList.map(({id, name, number}) =>(
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}/>))}
            </ContactRegister>
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}