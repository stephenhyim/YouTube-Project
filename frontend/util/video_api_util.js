

export const fetchVideos = () => {
    return $.ajax({
        url: `/api/videos`
    })
}