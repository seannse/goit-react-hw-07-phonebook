import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, addContact, removeContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [getContacts, addContact, removeContact];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
