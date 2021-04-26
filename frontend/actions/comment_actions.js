import * as CommentAPIUtil from '../util/comment_api_util';
import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const receiveComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}


export const fetchComments = (videoId) => {
    return dispatch => {
        return CommentAPIUtil.fetchComments(videoId)
            .then(comments => dispatch(receiveComments(comments)))
    }
}

export const fetchComment = commentId => {
    return dispatch => {
        return CommentAPIUtil.fetchComment(commentId)
            .then(comment => dispatch(receiveComment(comment)))
    }
}

export const createComment = comment => {
    debugger
    return dispatch => {
        debugger
        return CommentAPIUtil.createComment(comment)
            .then(comment => dispatch(receiveComment(comment)))
    }
}

export const deleteComment = commentId => {
    debugger
    return dispatch => {
        debugger
        return CommentAPIUtil.deleteComment(commentId)
            .then(() => dispatch(removeComment(commentId)))
    }
}

export const updateComment = comment => {
    return dispatch => {
        return CommentAPIUtil.updateComment(comment)
            .then(comment => dispatch(receiveComment(comment)))
    }
}

export const likeComment = like => {
    debugger
    return dispatch => {
        debugger
        return LikeAPIUtil.createLike(like)
            .then((comment) => dispatch(receiveComment(comment)))
    }
}

export const unlikeComment = like => {
    debugger
    return dispatch => {
        debugger
        return LikeAPIUtil.deleteLike(like)
            .then(comment => dispatch(receiveComment(comment)))
    }
}