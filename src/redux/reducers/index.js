import { combineReducers } from "redux";
import dialogReducers from "./dialogReducers";
import todosReducers from "./todosReducers";

const rootReducer = combineReducers({
	todos: todosReducers,
	dialog: dialogReducers,
});

export default rootReducer;
