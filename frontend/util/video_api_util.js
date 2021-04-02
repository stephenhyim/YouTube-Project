
export const fetchVideos = () => {
    return $.ajax({
        url: `/api/videos`
    })
}

export const createVideo = video => {
    return $.ajax({
        url: `/api/users/${video.user_id}/videos`,
        method: "POST",
        data: { video }
    })
}