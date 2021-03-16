import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {FETCH_ALL_USERS} from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return nextState[action.currentUser.id] = action.currentUser;
    case FETCH_ALL_USERS:
      debugger
      nextState[action.users.users] = action.users.users;
      return nextState
    default:
      return state;
  }
};


export default usersReducer;
