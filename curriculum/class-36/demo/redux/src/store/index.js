import { createStore, combineReducers } from 'redux';

import { reducer as counter } from './counter-reducer';
import { reducer as name } from './name-reducer';

let reducer = combineReducers({
  counter,
  name,
});

console.log('Initial combined reducers', reducer());

export default function() {
  return createStore(reducer);
}
