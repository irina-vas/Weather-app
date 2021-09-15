import thunk from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

//reducers

//---middleware
const middleware = applyMiddleware(thunk);

//---store
const store = createStore('',middleware);
export default store;



