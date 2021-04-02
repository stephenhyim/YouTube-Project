import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoForm from './video_form';

const mSTP = (state, ownProps) => {
    return {
        video: {
            title: "",
            description: ""
        }
    }
}

const mDTP = dispatch => {
    return {
        createVideo: video => dispatch(createVideo(video))
    }
}

export default connect(mSTP, mDTP)(VideoForm)