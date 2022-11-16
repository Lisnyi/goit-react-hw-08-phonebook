import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  tagTypes: ["Contacts"],
  baseQuery: fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    console.log(getState())
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }, }),
  endpoints: (builder) => ({
    getContacts: builder.query({
        query: () => `/contacts`,
        providesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
        query: (body) => ({
            url: `/contacts`,
            method: 'POST',
            body,
        }),
        invalidatesTags: ["Contacts"],
    }),
    removeContact: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ["Contacts"],
    }),
  }),
})

export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi