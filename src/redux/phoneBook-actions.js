import types from "./action-types";
import { v4 as uuidv4 } from "uuid";

export const addContact = (newContact) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: newContact.name,
    number: newContact.number,
  },
});

export const deleteContact = (removableContactId) => ({
  type: types.DELETE,
  payload: removableContactId,
});

export const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export const filterContacts = (value) => ({
  type: types.FILTER,
  payload: value,
});
