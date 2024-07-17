import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/Products/productsSlice";
import contactsReducer from "./features/Contacts/contactsSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
