import {connect} from 'react-redux';
import SearchIndex from './search_index';

import {fetchResults} from '../../actions/search_actions'

const mSTP = (state, ownProps) => {
    return {
        searchBody: Object.values(state.ui.search)
    }
}

const mDTP = dispatch => {
    return {
        fetchResults: searchBody => dispatch(fetchResults(searchBody))
    }
}

export default connect(mSTP, mDTP)(SearchIndex)