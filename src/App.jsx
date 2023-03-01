import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';

import { selectContacts, selectLoading } from 'redux/selectors';
import { ContactForm, ContactList, Filter } from './components';

import css from './styles/App.module.css';

export function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <ContactList />
      ) : (
        <p>Your contacts list is empty</p>
      )}
      {loading && <Loader />}
    </div>
  );
}
