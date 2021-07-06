import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import PhonebookForm from "./components/PhonebookForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import { ReactComponent as AddContactIcon } from "./icons/user-plus.svg";
import { ReactComponent as DeleteContactIcon } from "./icons/user-minus.svg";
import store from "./redux/store";
import * as actions from "./redux/phoneBook-actions";

console.log(store);
// console.log(store.dispatch(actions.deleteContact));

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("my-contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   parsedContacts && this.setState({ contacts: parsedContacts });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentDidUpdate");
  //   const newContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;
  //   if (newContacts !== prevContacts) {
  //     localStorage.setItem("my-contacts", JSON.stringify(newContacts));
  //   }
  // }

  // addContact = (newContact) => {
  //   const { contacts } = this.state;
  //   const contact = {
  //     id: uuidv4(),
  //     name: newContact.name,
  //     number: newContact.number,
  //   };

  //   contacts.find(({ name }) => name === newContact.name)
  //     ? alert("This contact already exist")
  //     : this.setState(({ contacts }) => ({
  //         contacts: [contact, ...contacts],
  //       }));
  // };

  // deleteContact = (removableContactId) => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter((contact) => contact.id !== removableContactId),
  //   }));
  // };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
    this.filterContacts();
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContactSnippet = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContactSnippet)
    );
  };

  render() {
    // const { filter } = this.state;
    // const filteredContacts = this.filterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm
          // onSubmit={this.addContact}
          aria-label="Add contact"
          children={<AddContactIcon width="25" height="25" fill="#fff" />}
        />

        <h2>Contacts</h2>
        <Filter
        // value={filter}
        // onChange={this.changeFilter}
        />
        <ContactList
          // list={filteredContacts}
          // onDelete={this.deleteContact}
          // list={filteredContacts}
          // onDelete={this.deleteContact}
          aria-label="Delete contact"
          children={<DeleteContactIcon width="25" height="25" />}
        />
      </Container>
    );
  }
}

export default App;
