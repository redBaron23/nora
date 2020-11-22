import { createStore } from "redux";
import { logInReducer } from "./logInReducer";

export const store = createStore(logInReducer);
