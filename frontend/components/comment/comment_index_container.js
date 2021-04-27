import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments, deleteComment, updateComment, likeComment, unlikeComment } from '../../actions/comment_actions'
import CommentIndex from './comment_index'

const mSTP = (state, ownProps) => {
    debugger
    return {
        comments: state.entities.comments,
        videoId: ownProps.match.params.videoId,
        currentUser: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        fetchComments: (videoId) => dispatch(fetchComments(videoId)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        updateComment: comment => dispatch(updateComment(comment)),
        likeComment: like => dispatch(likeComment(like)),
        unlikeComment: like => dispatch(unlikeComment(like))
    }
}

export default withRouter(connect(mSTP, mDTP)(CommentIndex))