import {
    RECEIVE_VIDEO_ERRORS,
    REMOVE_VIDEO_ERRORS,
    RECEIVE_VIDEO
} from '../actions/video_actions';


export default (state = [], action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        case REMOVE_VIDEO_ERRORS:
        case RECEIVE_VIDEO:
            return [];
        default:
            return state;
    }
};