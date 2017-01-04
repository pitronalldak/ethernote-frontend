import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import mainReducer from '../reducers/main.js';


const reducers = {
    main: mainReducer,
    form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;