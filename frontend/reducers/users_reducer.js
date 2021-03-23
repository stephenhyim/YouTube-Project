import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions'

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return nextState[action.currentUser.id] = action.currentUser;
    case RECEIVE_USER:
      debugger
      nextState[action.user.user.id] = action.user.user;
      return nextState
    default:
      return state;
  }
};


export default UsersReducer;
