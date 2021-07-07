import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

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

export default ContactList;
