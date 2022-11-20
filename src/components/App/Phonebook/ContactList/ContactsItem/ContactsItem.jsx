import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import { ContactElement, ContactName, ContactNumber, ContactContainer } from "../ContactsList.styled"
import { useRemoveContactMutation } from "redux/contacts/contacts-api"

export const ContactItem = ({id, number, name}) => {
    const [removeContact, {isLoading}] = useRemoveContactMutation()
    const deleteContact = async (id, name) => {
        await removeContact(id)
        Notify.success(`${name} successfully deleted`)
    }

    return  <ContactElement key={id}>
                <ContactContainer>
                    <ContactName>Name: {name}</ContactName>
                    <ContactNumber>Number: {number}</ContactNumber>
                </ContactContainer>
                <LoadingButton
                    size="small"
                    variant="contained"
                    onClick={() => deleteContact(id, name)}
                    disabled={isLoading}
                    loading={isLoading}
                    >{isLoading ? "Deleting" : "Delete"}</LoadingButton>
            </ContactElement>
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}