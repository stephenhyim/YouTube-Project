import { connect } from 'react-redux';
import { createVideo, updateVideo, fetchVideos, deleteVideo } from '../../actions/video_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { receiveVideoErrors, removeVideoErrors } from '../../actions/video_actions';
import VideoChannel from './video_channel';

const mSTP = (state, ownProps) => {
    return {
        userId: state.session.id,
        errors: state.errors.video,
        videos: state.entities.videos
    }
}

const mDTP = dispatch => {
    return {
        createVideo: (video) => dispatch(createVideo(video)),
        updateVideo: (video, id) => dispatch(updateVideo(video, id)),
        fetchVideos: () => dispatch(fetchVideos()),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        receiveVideoErrors: errors => dispatch(receiveVideoErrors(errors)),
        deleteVideo: videoId => dispatch(deleteVideo(videoId))
    };
};

export default connect(mSTP, mDTP)(VideoChannel)