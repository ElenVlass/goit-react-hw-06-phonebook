import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";
import * as actions from "../../redux/phoneBook-actions";

const ContactList = ({ list, onDelete, allysProps, children }) => (
  <ul className={styles.list}>
    {list.map(({ id, name, number }) => (
      <li key={id} className={styles.item}>
        <span className={styles.name}>
          {name}: {number}
        </span>
        <button
          className={styles.button}
          type="button"
          onClick={() => onDelete(id)}
          {...allysProps}
        >
          {children}
          <span className={styles.span}>Delete</span>
        </button>
      </li>
    ))}
  </ul>
);

ContactList.defaultProps = {
  onDelete: () => null,
  children: null,
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string.isRequired,
};

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
