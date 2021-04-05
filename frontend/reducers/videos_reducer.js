import {
    RECEIVE_ALL_VIDEOS,
    RECEIVE_VIDEO
} from '../actions/video_actions'

const VideosReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos
        case RECEIVE_VIDEO:
            debugger
            nextState = Object.assign({}, state, action.video)
            return nextState
        default:
            return state;
    }
}

export default VideosReducer;