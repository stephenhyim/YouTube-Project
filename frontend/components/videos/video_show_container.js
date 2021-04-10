import {connect} from 'react-redux';
import {fetchVideos} from '../../actions/video_actions';
import VideoShow from './video_show';

const mSTP = (state, ownProps) => {
    debugger
    return {
        videos: state.entities.videos,
        user: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mSTP, mDTP)(VideoShow)