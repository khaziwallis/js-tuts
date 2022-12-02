import { createStore } from 'redux';
import counter from './counter';

const store = createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
