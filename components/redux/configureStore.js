import { createStore, combineReducers } from "redux";
import PassengerReducer from "./Reducers";

const rootReducer = combineReducers({PassengerReducer});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;