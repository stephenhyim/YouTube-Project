import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS'

const receiveVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
}

export const fetchVideos = () => dispatch => {
    debugger
    return VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
}