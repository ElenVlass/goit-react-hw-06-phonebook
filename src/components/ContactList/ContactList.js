import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

class ContactList extends Component {
  static defaultProps = {
    onDelete: () => null,
    children: null,
  };

  static propTypes = {
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

  render() {
    const { list, onDelete } = this.props;

    return (
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
              {...this.props.allysProps}
            >
              {this.props.children}
              <span className={styles.span}>Delete</span>
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
