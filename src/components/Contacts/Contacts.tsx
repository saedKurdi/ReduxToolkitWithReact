import { ContactsList } from "./styles";
import { FC } from "react";
import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { getAllContacts } from "../../redux/features/Contacts/contactSelectors";

export const Contacts: FC = () => {
  const contacts = useSelector(getAllContacts);
  return (
    <ContactsList>
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ContactsList>
  );
};
