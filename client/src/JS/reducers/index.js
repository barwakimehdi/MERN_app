import { combineReducers } from "redux";
import { personReducer } from "./persons";
import { editReducer } from "./edit";
export const rootReducer = combineReducers({ personReducer, editReducer });
