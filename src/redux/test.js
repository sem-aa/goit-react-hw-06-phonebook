import { combineReducers } from "redux";

const test = (state = [], action) => {
  return state;
};

const test2 = (state = "", action) => {
  return state;
};

export default combineReducers({
  test,
  test2,
});
