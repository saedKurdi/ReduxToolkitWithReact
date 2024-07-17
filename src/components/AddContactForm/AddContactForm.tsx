import { ChangeEvent, FormEvent, useState } from "react";
import { AddForm } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { ContactType } from "../../types/ContactType";
import { getAllContacts } from "../../redux/features/Contacts/contactSelectors";
import { addContact } from "../../redux/features/Contacts/contactsSlice";

export default function AddContactForm() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();
  const allContacts = useSelector(getAllContacts);
  const handleAddContact = () => {
    const newContact: ContactType = {
      name: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      id: allContacts.length + 1,
    };
    dispatch(addContact(newContact));
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddContact();
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
    }
  };
  return (
    <AddForm onSubmit={handleOnSubmit}>
      <input
        onChange={handleOnChange}
        name="firstname"
        type="text"
        placeholder="Firstname"
      />
      <input
        onChange={handleOnChange}
        name="lastname"
        type="text"
        placeholder="Lastname"
      />
      <input
        onChange={handleOnChange}
        name="email"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={handleOnChange}
        name="phone"
        type="text"
        placeholder="Phone"
      />
      <button type="submit">Add New Contact</button>
    </AddForm>
  );
}
