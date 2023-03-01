import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/contactsApi';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const result = await api.fetchContacts();
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/postContact',
  async (contact, thunkApi) => {
    try {
      const data = await api.postContact(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contact, thunkApi) => {
    try {
      const data = await api.deleteContact(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
