import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';

const ContactList = ({ searchContact, deleteContact }) => {
  return (
    <ul className={css.list}>
      {searchContact.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} handleDeleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;