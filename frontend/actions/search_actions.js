import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_ALL_RESULTS = "RECEIVE_ALL_RESULTS"

const receiveResults = results => {
    return {
        type: RECEIVE_ALL_RESULTS,
        results
    }
}

export const fetchResults = searchBody => {
    return dispatch => {
        return SearchAPIUtil.fetchResults(searchBody)
            .then(results => dispatch(receiveResults(results)))
    }
}