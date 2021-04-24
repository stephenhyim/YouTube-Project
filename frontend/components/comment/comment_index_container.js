import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments, deleteComment } from '../../actions/comment_actions'
import CommentIndex from './comment_index'

const mSTP = (state, ownProps) => {
    debugger
    return {
        comments: state.entities.comments,
        videoId: ownProps.match.params.videoId
    }
}

const mDTP = dispatch => {
    return {
        fetchComments: (videoId) => dispatch(fetchComments(videoId)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default withRouter(connect(mSTP, mDTP)(CommentIndex))