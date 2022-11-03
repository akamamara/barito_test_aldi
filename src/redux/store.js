import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run()

export { store };
