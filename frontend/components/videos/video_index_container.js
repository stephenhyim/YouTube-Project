import {connect} from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions'
import VideoIndex from './video_index';


const mSTP = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos),
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        
    }
}

export default connect(mSTP, mDTP)(VideoIndex)