import { RootState } from "../../store";

export const getAllContacts = (state: RootState) => state.contacts.allContacts;
