import React from "react";
import { CSSTransition } from "react-transition-group";
import s from "./App.module.css";
import Form from "./copmonents/Form/Form";
import Phonebook from "./copmonents/Phonebook/Phonebook";
import Filter from "./copmonents/Filter/Filter";
import fadeStyle from "./copmonents/fade/fade.module.css";
import Logo from "./copmonents/Logo/Logo";
import ids from "short-id";

import { connect } from "react-redux";
import * as actions from "./redux/contacts-actions";

class App extends React.Component {
  state = {
    contacts: [],
    doubleContact: false,
    filter: "",
  };

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parseContacts.length !== 0) {
      this.setState({ contacts: parseContacts });
    } else {
      this.setState({
        contacts: [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  formSubmitHandler = (data) => {
    if (this.state.contacts.find((item) => item.name === data.name)) {
      this.setState({ doubleContact: true });
      setTimeout(() => this.setState({ doubleContact: false }), 3000);

      return;
    }
    const contact = {
      id: ids.generate(),
      name: data.name,
      number: data.number,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts, doubleContact } = this.state;
    const visibleContact = this.getVisibleContact();
    return (
      <div className={s.App}>
        {this.props.contacts}
        {this.props.testFn}

        <CSSTransition
          in={doubleContact}
          classNames={fadeStyle}
          timeout={500}
          unmountOnExit
        >
          <div className={s.alert}>Такой контакт уже существует!</div>
        </CSSTransition>
        <Logo />
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className={s.title}>Contacts</h2>
        <CSSTransition
          in={contacts.length > 1}
          classNames={fadeStyle}
          timeout={500}
          unmountOnExit
        >
          <Filter value={filter} onChange={this.changeFilter} />
        </CSSTransition>

        <Phonebook
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testFn: () => dispatch(actions.test(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
