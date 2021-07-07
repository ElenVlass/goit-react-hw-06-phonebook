import { connect } from "react-redux";
import * as actions from "../../redux/phoneBook-actions";
import ContactList from "./ContactList";

const specifyContacts = (allContacts, filter) => {
  const normalizedContactSnippet = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedContactSnippet)
  );
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.phoneBook;

  return { list: specifyContacts(contacts, filter) };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
