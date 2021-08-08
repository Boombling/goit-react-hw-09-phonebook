import axios from "axios";
import actions from "./phonebook-actions";

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactsError(error.message)));
};

const submit =
  ({ name, number }) =>
  async (dispatch) => {
    const item = { name, number };

    dispatch(actions.addContactRequest());

    try {
      const { data } = await axios.post('/contacts', item);
      dispatch(actions.addContactSuccess(data));
    } catch (error) {
      dispatch(actions.addContactsError(error.message));
    }
  };

const deletedContact = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactsError(error.message)));
};

export default {
  submit,
  deletedContact,
  fetchContacts,
};