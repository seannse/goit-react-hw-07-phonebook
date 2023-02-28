import { useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { ContactForm, ContactList, Filter } from './components';

import css from './styles/App.module.css';

export function App() {
  const contacts = useSelector(selectContacts);

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
    </div>
  );
}
