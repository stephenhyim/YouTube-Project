
export const fetchComments = (videoId) => {
    return $.ajax({
        url: `/api/comments`,
        data: videoId
    })
}

export const fetchComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`
    })
}

export const createComment = comment => {
    return $.ajax({
        url: `api/comments`,
        method: "POST",
        data: comment
    })
}