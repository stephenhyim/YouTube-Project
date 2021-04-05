
export const fetchVideos = () => {
    return $.ajax({
        url: `/api/videos`
    })
}

export const createVideo = (video) => {
    debugger
    return $.ajax({
        url: `/api/videos`,
        method: "POST",
        data: video,
        contentType: false,
        processData: false
    })
}