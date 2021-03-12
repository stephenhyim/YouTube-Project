import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return nextState[action.currentUser.id] = action.currentUser;
    case RECEIVE_USER:
      debugger
      nextState[action.firstname] = action.firstname;
      return nextState
    default:
      return state;
  }
};


export default usersReducer;
