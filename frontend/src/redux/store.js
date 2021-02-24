import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducer/user";
import childReducer from "./reducer/child";
import addressReducer from "./reducer/address";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  userReducer,
  childReducer,
  addressReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
