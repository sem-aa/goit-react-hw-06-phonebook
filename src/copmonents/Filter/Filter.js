import React from "react";
import s from "./Filter.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.find}>
      Find number
      <input
        className={s.inputFind}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
