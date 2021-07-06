import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";
import * as actions from "../../redux/phoneBook-actions";

const Filter = ({ filter, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const filterContacts = (contacts, filter) => {
  const normalizedContactSnippet = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedContactSnippet)
  );
};

const mapStateToProps = ({ phoneBook }) => ({
  filter: phoneBook.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.changeFilter(e.target.value)),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

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
