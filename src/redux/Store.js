import { createStore } from "redux";
import { Reducers } from "./todo/Reducer";

export const store = createStore(Reducers)