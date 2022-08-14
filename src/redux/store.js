import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import Menu from './reducers/Menu';
import MyFaves from './reducers/MyFaves';

const rootReducers = combineReducers({
    Menu,
    MyFaves
});

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;