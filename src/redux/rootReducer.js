import { combineReducers } from "redux";
import { authReducer } from "./Auth/auth-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  
});

export default rootReducer;