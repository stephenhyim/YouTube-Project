
export const fetchComments = (video_id) => {
    return $.ajax({
        url: `/api/comments`,
        data: {video_id}
    })
}

export const fetchComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`
    })
}

export const createComment = comment => {
    return $.ajax({
        url: `/api/comments`,
        method: "POST",
        data: {comment}
    })
}

export const deleteComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: "DELETE"
    })
}

export const updateComment = comment => {
    return $.ajax({
        url: `api/comments/${comment.id}`,
        method: "PATCH",
        data: {comment}
    })
}