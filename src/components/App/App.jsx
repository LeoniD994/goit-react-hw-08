import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import {
  addContact,
  selectContacts,
  deleteContact,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { nanoid } from "nanoid";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
        <SearchBox />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
