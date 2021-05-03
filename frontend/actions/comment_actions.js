import * as CommentAPIUtil from '../util/comment_api_util';
import * as LikeAPIUtil from '../util/like_api_util';
import * as DislikeAPIUtil from '../util/dislike_api_util';

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
    return dispatch => {
        return CommentAPIUtil.createComment(comment)
            .then(comment => dispatch(receiveComment(comment)))
    }
}

export const deleteComment = commentId => {
    return dispatch => {
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
    return dispatch => {
        return LikeAPIUtil.createLike(like)
            .then((comment) => dispatch(receiveComment(comment)))
    }
}

export const unlikeComment = like => {
    return dispatch => {
        return LikeAPIUtil.deleteLike(like)
            .then(comment => dispatch(receiveComment(comment)))
    }
}

export const hateComment = dislike => {
    return dispatch => {
        return DislikeAPIUtil.createDislike(dislike)
            .then((comment) => dispatch(receiveComment(comment)))
    }
}

export const unhateComment = dislike => {
    return dispatch => {
        return DislikeAPIUtil.deleteDislike(dislike)
            .then(comment => dispatch(receiveComment(comment)))
    }
}

