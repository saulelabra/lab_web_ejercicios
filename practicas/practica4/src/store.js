import { createStore , applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import contactListReducer from './reducers/contactListReducer';

const reducer = combineReducers({
    contactListReducer
})

const store = createStore(reducer);

export default store;