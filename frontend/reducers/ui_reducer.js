import { combineReducers } from 'redux';

import modal from './modal_reducer';
import search from './search_reducer';

const uiReducer = combineReducers({
  modal,
  search
});

export default uiReducer;