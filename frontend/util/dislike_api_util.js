

export const createDislike = dislike => {
    return $.ajax({
        url: `/api/dislikes`,
        method: "POST",
        data: { dislike }
    })
}

export const deleteDislike = dislike => {
    return $.ajax({
        url: `/api/dislikes/1`,
        method: "DELETE",
        data: { dislike }
    })
}