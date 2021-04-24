
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
    debugger
    return $.ajax({
        url: `/api/comments`,
        method: "POST",
        data: {comment}
    })
}

export const deleteComment = commentId => {
    debugger
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: "DELETE"
    })
}