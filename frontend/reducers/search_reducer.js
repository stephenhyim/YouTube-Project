import { RECEIVE_ALL_RESULTS } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_RESULTS:
            return action.results
        default: 
            return state;
    }
}

export default SearchReducer;