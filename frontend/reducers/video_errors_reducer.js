import {
    RECEIVE_VIDEO_ERRORS,
    REMOVE_VIDEO_ERRORS
} from '../actions/video_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        case REMOVE_VIDEO_ERRORS:
            return [];
        default:
            return state;
    }
};