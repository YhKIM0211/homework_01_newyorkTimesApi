import { combineReducers, configureStore } from "@reduxjs/toolkit";
import useSlice from "./useSlice";

const rootReducer = combineReducers({
    useSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
