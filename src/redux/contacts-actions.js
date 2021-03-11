import types from "./contacts-types";
import ids from "short-id";

const addContact = (data) => ({
  type: types.ADD,
  payload: {
    id: ids.generate(),
    name: data.name,
    number: data.number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const filter = (value) => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, deleteContact, filter };
