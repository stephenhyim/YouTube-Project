
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

export const updateVideo = (video, id) => {
    return $.ajax({
        url: `/api/videos/${id}`,
        method: 'PATCH',
        data: video,
        contentType: false,
        processData: false
    })
}

export const deleteVideo = videoId => {
    debugger
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'DELETE'
    })
}