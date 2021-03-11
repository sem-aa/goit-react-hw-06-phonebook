import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts-reducer";
import test from "./test";

const rootReducer = combineReducers({
  test: test,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
