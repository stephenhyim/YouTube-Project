
export const fetchVideos = () => {
    return $.ajax({
        url: `/api/videos`
    })
}

export const fetchVideo = videoId => {
    return $.ajax({
        url: `/api/videos/${videoId}`
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

export const updateVideo = (video) => {
    return $.ajax({
        url: `/api/videos/${video.id}`,
        method: 'PATCH',
        data: video
    })
}