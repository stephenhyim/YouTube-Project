import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

export const receiveVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
}

export const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO, 
        video
    }
}

export const fetchVideos = () => dispatch => {
    debugger
    return VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
}

export const createVideo = video => dispatch => {
    return VideoAPIUtil.createVideo(video)
        .then(video = dispatch(receiveVideo(video)))
}