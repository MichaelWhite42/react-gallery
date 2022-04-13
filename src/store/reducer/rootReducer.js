import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { imageReducer } from "./imageReducer";

export const rootReducer = combineReducers({
    reducer,
    imageReducer
})