import ids from "short-id";
import { createAction } from "@reduxjs/toolkit";
import types from "./contacts-types";

const addContact = createAction(types.ADD, (data) => {
  return {
    payload: {
      id: ids.generate(),
      name: data.name,
      number: data.number,
    },
  };
});

const deleteContact = createAction(types.DELETE);
const filter = createAction(types.FILTER);

// Без библиотеки Redux Toolkit:
// const addContact = (data) => ({
//   type: types.ADD,
//   payload: {
//     id: ids.generate(),
//     name: data.name,
//     number: data.number,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filter = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });

const actions = {
  addContact,
  deleteContact,
  filter,
};

export default actions;
