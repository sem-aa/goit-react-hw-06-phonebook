import React from "react";
import s from "./Phonebook.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import fadeStyles from "./fadePhonebook.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";

function Phonebook({ contacts, onDeleteContact }) {
  return (
    <TransitionGroup component="ul">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition classNames={fadeStyles} key={id} timeout={500}>
          <li className={s.conctact}>
            <p className={s.name}>{name}</p>
            <p className={s.number}>{number}</p>
            <button className={s.button} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const getVisibleContact = (allContact, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContact.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContact(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
