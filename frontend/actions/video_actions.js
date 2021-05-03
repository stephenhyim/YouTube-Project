import * as VideoAPIUtil from '../util/video_api_util';
import * as LikeAPIUtil from '../util/like_api_util';
import * as DislikeAPIUtil from '../util/dislike_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const REMOVE_VIDEO_ERRORS = "REMOVE_VIDEO_ERRORS";
export const REMOVE_VIDEO = "REMOVE_VIDEO"

const receiveVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
}

const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO, 
        video
    }
}

const receiveVideoErrors = errors => {
    return {
        type: RECEIVE_VIDEO_ERRORS,
        errors
    }
}

const removeVideoErrors = () => {
    return {
        type: REMOVE_VIDEO_ERRORS
    }
}

const removeVideo = videoId => {
    return {
        type: REMOVE_VIDEO,
        videoId
    }
}

export const fetchVideos = () => dispatch => {
    return VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
}

export const fetchVideo = videoId => dispatch => {
    return VideoAPIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
}

export const createVideo = video => dispatch => {
    return VideoAPIUtil.createVideo(video)
        .then(video => dispatch(receiveVideo(video)),
            (err) => (dispatch(receiveVideoErrors(err.responseJSON))))
}

export const updateVideo = (video, id) => dispatch => {
    return VideoAPIUtil.updateVideo(video, id)
        .then(video => dispatch(receiveVideo(video)))
            // (err) => (dispatch(receiveVideoErrors(err.responseJSON))))
}

export const deleteVideo = videoId => {
    return dispatch => {
        return VideoAPIUtil.deleteVideo(videoId)
            .then(() => dispatch(removeVideo(videoId)))
    }
}

export const likeVideo = like => {
    return dispatch => {
        return LikeAPIUtil.createLike(like)
            .then((video) => dispatch(receiveVideo(video)))
    }
}

export const dislikeVideo = like => {
    return dispatch => {
        return LikeAPIUtil.deleteLike(like)
            .then(video => dispatch(receiveVideo(video)))
    }
}

export const hateVideo = dislike => {
    return dispatch => {
        return DislikeAPIUtil.createDislike(dislike)
            .then((video) => dispatch(receiveVideo(video)))
    }
}

export const unhateVideo = dislike => {
    return dispatch => {
        return DislikeAPIUtil.deleteDislike(dislike)
            .then(video => dispatch(receiveVideo(video)))
    }
}