

export const createLike = like => {
    return $.ajax({
        url: `/api/likes`,
        method: "POST",
        data: { like }
    })
}

export const deleteLike = likeId => {
    return $.ajax({
        url: `/api/likes/${likeId}`,
        method: "DELETE"
    })
}