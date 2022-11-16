import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filter-slice";
import { contactsApi } from "./contacts/contacts-api"
import authReducer from './auth/auth-slice'

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        auth: authReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})