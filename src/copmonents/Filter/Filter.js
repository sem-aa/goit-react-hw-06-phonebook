import React from "react";
import s from "./Filter.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";
import { CSSTransition } from "react-transition-group";
import fadeStyle from "../fade/fade.module.css";

const Filter = ({ value, onChange, contacts }) => {
  return (
    <>
      <CSSTransition
        in={contacts.length > 1}
        classNames={fadeStyle}
        timeout={500}
        unmountOnExit
      >
        <label className={s.find}>
          Find number
          <input
            className={s.inputFind}
            type="text"
            value={value}
            onChange={onChange}
          ></input>
        </label>
      </CSSTransition>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
