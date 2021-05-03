import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions' 

const mSTP = (state, ownProps) => {
    return {
        currentVideo: ownProps.videoId,
        currentUser: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mSTP, mDTP)(CommentForm)