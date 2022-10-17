import { createStore } from "redux";
import { Reducers } from "./redux/Reducer";

export const store = createStore(Reducers)