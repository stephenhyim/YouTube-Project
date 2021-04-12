import { connect } from'react-redux';
import { fetchComments } from '../../actions/comment_actions'
import CommentIndex from './comment_index'

const mSTP = (state, ownProps) => {
    return {
        comments: Object.values(state.entites.comments)
    }
}

const mDTP = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments())
    }
}

export default connect(mSTP, mDTP)(CommentIndex)