import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';
import { removeContact } from 'redux/contacts/operations';

import css from './ContactList.module.css';
import container from '../../styles/Container.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  // function filteredContacts() {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }

  return (
    <div className={container.container}>
      <ol className={css.list}>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <li className={css.item} key={id}>
              <p>
                {name}: {phone}
              </p>

              <button
                className={css.button}
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
                <RiDeleteBinLine height="30px" width="30px" />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ContactList;
