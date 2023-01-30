import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "../reducers/reducer";

export const store = configureStore(mainReducer);
