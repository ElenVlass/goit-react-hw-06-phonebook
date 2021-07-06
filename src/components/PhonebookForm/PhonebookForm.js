import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./PhonebookForm.module.scss";
import * as actions from "../../redux/phoneBook-actions";

class PhonebookForm extends Component {
  static defaultProps = {
    onSubmit: () => null,
    children: null,
  };

  static propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.node,
    "aria-label": PropTypes.string.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.isNameExist()
      ? alert("This contact already exist")
      : this.props.onSubmit(this.state);

    this.resetFormField();
  };

  resetFormField() {
    this.setState({
      name: "",
      number: "",
    });
  }

  isNameExist = () => {
    const { allContacts } = this.props;
    const { name } = this.state;
    return allContacts.find((contact) => contact.name === name);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button
          className={styles.button}
          type="submit"
          {...this.props.allyProps}
        >
          {this.props.children}
          <span className={styles.span}>Add contact</span>
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ phoneBook: { contacts } }) => ({
  allContacts: contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(actions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookForm);
