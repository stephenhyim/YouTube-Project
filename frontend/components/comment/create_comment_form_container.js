import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions' 

const mSTP = (state, ownProps) => {
    // debugger
    return {
        currentVideo: ownProps.videoId
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mSTP, mDTP)(CommentForm)