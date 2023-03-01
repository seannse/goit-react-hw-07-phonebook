import axios from 'axios';

axios.defaults.baseURL = 'https://63f8cda85b0e4a127dee2724.mockapi.io/contacts';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async contact => {
  await axios.delete(`/contacts/${contact}`);
  return contact;
};
