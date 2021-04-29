import {connect} from 'react-redux';
import SearchBar from './search_bar';

import { fetchVideos } from '../../actions/video_actions'

const mSTP = (state, ownProps) => {
    return {
        videos: state.entities.videos,
        searchBody: ""
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mSTP, mDTP)(SearchBar)