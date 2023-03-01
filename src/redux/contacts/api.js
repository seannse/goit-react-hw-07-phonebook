import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/contacts';
const BASE_URL = 'https://63f8cda85b0e4a127dee2724.mockapi.io';

export const api = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ['Contacts'],
      transformResponse: res => {
        return res.map(item => ({ ...item, wow: 'yoohoo' }));
      },
    }),
    addNewContact: builder.mutation({
      query: newContact => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateComment: builder.mutation({
      query: updatedComment => ({
        url: `${API_ENDPOINT}/${updatedComment.id}`,
        method: 'PUT',
        body: updatedComment,
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddNewCommentMutation,
  useUpdateCommentMutation,
} = api;
