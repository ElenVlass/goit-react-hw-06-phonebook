import { combineReducers } from "redux";
import types from "./action-types";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contacts = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    // return state.find((contact) => contact.name === payload.name)
    //     ? alert("This contact already exist")
    //     : [...state, payload];

    case types.DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return null;

    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

//   changeFilter = (e) => {
//     this.setState({ filter: e.target.value });
//     this.filterContacts();
//   };

//   filterContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedContactSnippet = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedContactSnippet)
//     );
//   };

// const form = (state = {name: "", number: ""}, {type, payload}) => ()

export default combineReducers({ contacts, filter });

// addContact = (newContact) => {
//     const { contacts } = this.state;
//     const contact = {
//       id: uuidv4(),
//       name: newContact.name,
//       number: newContact.number,
//     };

//     contacts.find(({ name }) => name === newContact.name)
//       ? alert("This contact already exist")
//       : this.setState(({ contacts }) => ({
//           contacts: [contact, ...contacts],
//         }));
//   };
