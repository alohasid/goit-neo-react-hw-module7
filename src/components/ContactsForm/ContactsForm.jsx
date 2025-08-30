import { useDispatch } from 'react-redux';
import {addContact} from "../../contactsOps.js";

export default function ContactsForm() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        dispatch(addContact()); // Use "phone" to match backend field
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" required />
            <input name="number" placeholder="Number" required />
            <button type="submit">Add Contact</button>
        </form>
    );
}