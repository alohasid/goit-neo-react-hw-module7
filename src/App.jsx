import ContactsForm from "./components/ContactsForm/ContactsForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import {useDispatch} from "react-redux";
import {fetchContacts} from "./contactsOps.js";
import {useEffect} from "react";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <h1>Phonebook</h1>
            <ContactsForm />
            <h2>Contacts</h2>
            <SearchBox />
            <ContactList />
        </>
    );
}