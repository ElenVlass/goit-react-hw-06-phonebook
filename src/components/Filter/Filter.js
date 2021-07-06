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

const mapStateToProps = ({ phoneBook }) => ({
  filter: phoneBook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
