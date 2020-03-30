import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
import state from "./initialState";

export default createStore(reducer, state, composeWithDevTools());
