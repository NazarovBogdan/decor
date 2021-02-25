import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import reducer_content from './reducer_content';

let reducers = combineReducers({
    form: formReducer,
    content: reducer_content
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
