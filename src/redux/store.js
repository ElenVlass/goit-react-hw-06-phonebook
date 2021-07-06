import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./phoneBook-reduser";

const rootReduser = combineReducers({
  phoneBook: reducer,
});
const store = createStore(rootReduser, composeWithDevTools());

export default store;
