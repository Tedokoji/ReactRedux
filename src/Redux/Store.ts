
import { createStore } from 'redux';
import { reducer } from './Reducers.ts';
 const store = createStore(reducer)
 export default store;