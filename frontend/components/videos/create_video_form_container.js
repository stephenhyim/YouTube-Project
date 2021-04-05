import { connect } from 'react-redux';
import { createVideo, fetchVideos } from '../../actions/video_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import VideoForm from './video_form';

const mSTP = (state, ownProps) => {
    return {
        userId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        createVideo: (video) => dispatch(createVideo(video)),
        fetchVideos: () => dispatch(fetchVideos()),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal))

    }
}

export default connect(mSTP, mDTP)(VideoForm)