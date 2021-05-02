import {connect} from 'react-redux';
import SearchBar from './search_bar';

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

export default connect(mSTP, mDTP)(SearchBar)