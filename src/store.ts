import { createStore } from "redux";
import { combineReducers } from "redux";
import reduxHooksReducer from "./reduxHooks/reducer";

const reducers = combineReducers({
  num: reduxHooksReducer
});
const store = createStore(reducers);
export default store;
