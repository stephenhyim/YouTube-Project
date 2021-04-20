import {connect} from 'react-redux';
import {fetchVideos, likeVideo, dislikeVideo } from '../../actions/video_actions';
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
        fetchVideos: () => dispatch(fetchVideos()),
        likeVideo: like => dispatch(likeVideo(like)),
        dislikeVideo: like => dispatch(dislikeVideo(like))
    }
}

export default connect(mSTP, mDTP)(VideoShow)