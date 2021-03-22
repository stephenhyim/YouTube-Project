import {
    RECEIVE_ALL_VIDEOS
} from '../actions/video_actions'

const VideosReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos
        default:
            return state;
    }
}

export default VideosReducer;