import { FC } from "react";
import { ContactType } from "../../types/ContactType";
import {
  ContactContainer,
  ContactEmail,
  ContactID,
  ContactLastname,
  ContactName,
  ContactPhone,
} from "./styles";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/features/Contacts/contactsSlice";

interface IContact {
  contact: ContactType;
}

export const Contact: FC<IContact> = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <ContactContainer>
      <ContactID>ID - {contact.id}</ContactID>
      <ContactName>Name : {contact.name}</ContactName>
      <ContactLastname>Lastname : {contact.lastname}</ContactLastname>
      <ContactEmail>Email : {contact.email}</ContactEmail>
      <ContactPhone>Phone : {contact.phone}</ContactPhone>
      <i
        onClick={() => dispatch(deleteContact(contact.id))}
        className="fa-solid fa-trash-can"
      ></i>
    </ContactContainer>
  );
};
