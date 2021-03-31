import {connect} from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import UserShow from './user_show';

const mSTP = (state, ownProps) => {
    debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
        video: state.entities.videos
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),

    }
} 

export default connect(mSTP, mDTP)(UserShow)