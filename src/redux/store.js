import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import Menu from './reducers/Menu';
import MyFaves from './reducers/MyFaves';
import Filter from './reducers/Filter';
import Content from './reducers/Content';

const rootReducers = combineReducers({
    Menu,
    MyFaves,
    Filter,
    Content
});

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;