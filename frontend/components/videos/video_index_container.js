import {connect} from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions'
import VideoIndex from './video_index';


const mSTP = (state, ownProps) => {
    debugger
    return {
        videos: Object.values(state.entities.videos),
        // user: state.entities.users[ownProps.match.params.userId]
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(VideoIndex)