import * as DislikeAPIUtil from '../util/dislike_api_util';

export const RECEIVE_DISLIKE = "RECEIVE_DISLIKE"
export const REMOVE_DISLIKE = "REMOVE_DISLIKE"

const receiveDislike = dislike => {
    return {
        type: RECEIVE_DISLIKE,
        dislike
    }
}

const removeDislike = dislikeId => {
    return {
        type: REMOVE_DISLIKE,
        dislikeId
    }
}

export const createDislike = dislike => {
    debugger
    return dispatch => {
        debugger
        return DislikeAPIUtil.createDislike(dislike)
            .then(dislike => dispatch(receiveDislike(dislike)))
    }
}

export const deleteDislike = dislikeId => {
    return dispatch => {
        return DislikeAPIUtil.deleteDislike(dislike)
            .then(() => dispatch(removeDislike(dislikeId)))
    }
}