import { contacts } from "./../../../../data/contacts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactType } from "./../../../types/ContactType";
export interface ContactsState {
  allContacts: ContactType[];
}

const contactsInitialState: ContactsState = {
  allContacts: contacts,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactType>) => {
      state.allContacts.unshift(action.payload);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.allContacts = state.allContacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
