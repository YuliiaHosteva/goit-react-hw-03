import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import css from '../Contact/Contact.module.css';


const Contact = ({
  contact: { id, name, number },
  handleDeleteContact
}) => {
  return (
    <div className={css.listItem}>
      <ul className={css.infoBlock}>
        <li className={css.wrap}>
          <FaUser />
          <p>{name}</p>
        </li>
        <li className={css.wrap}>
          <FaPhoneAlt />
          <p>{number}</p>
        </li>
      </ul>
      <button className={css.button} onClick={() => handleDeleteContact(id)}>Delete</button>
    </div>
  );
};


export default Contact;