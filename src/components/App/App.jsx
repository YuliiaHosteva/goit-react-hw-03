import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import initialContacts from '../initialContacts.json';
import css from './App.module.css';

const getCurrentContacts = () => {
  const savedContacts = localStorage.getItem("current-contacts");
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
}; 

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [contactList, setContactList] = useState(getCurrentContacts);
  
  useEffect(() => {
    localStorage.setItem('current-contacts', JSON.stringify(contactList));
  }, [contactList]);

  const updateSearchFilter = (evt) => {
    setInputValue(evt.target.value);
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(inputValue.toLowerCase())
  );

  const addContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContactList((prevContacts) => {
      return [...prevContacts, newContact];
    });
    actions.resetForm();
  };

  const handleDeleteContact = (contactId) => {
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };
  

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={inputValue} onChange={updateSearchFilter} />
      <ContactList
        searchContact={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
export default App;
