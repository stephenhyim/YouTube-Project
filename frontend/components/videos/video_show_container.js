import {connect} from 'react-redux';
import {fetchVideos, fetchVideo, likeVideo, dislikeVideo, hateVideo, unhateVideo } from '../../actions/video_actions';
import { fetchComments } from '../../actions/comment_actions'
import VideoShow from './video_show';

const mSTP = (state, ownProps) => {
    debugger
    return {
        videos: state.entities.videos,
        user: state.session.id,
        video: ownProps.match.params.videoId,
        videoId: ownProps.match.params.videoId
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        likeVideo: like => dispatch(likeVideo(like)),
        dislikeVideo: like => dispatch(dislikeVideo(like)),
        fetchComments: videoId => dispatch(fetchComments(videoId)),
        hateVideo: dislike => dispatch(hateVideo(dislike)),
        unhateVideo: dislike => dispatch(unhateVideo(dislike))
    }
}

export default connect(mSTP, mDTP)(VideoShow)