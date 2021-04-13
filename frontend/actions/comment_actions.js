import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS"

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
        return CommentAPIUtil.createPost(comment)
            .then(comment => dispatch(receiveComment(comment)))
    }
}