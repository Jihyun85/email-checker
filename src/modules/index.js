import { combineReducers } from "redux";
import { emailChecker } from "./emailChecker";

const rootReducer = combineReducers({ emailChecker });

export default rootReducer;
