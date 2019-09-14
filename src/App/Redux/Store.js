import {createStore} from "redux";
import {combineReducers, applyMiddleware} from "redux";
import applications from "./Reducers/ApplicationsReducer";
import filters from "./Reducers/FilterReducer";
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({applications, filters});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;