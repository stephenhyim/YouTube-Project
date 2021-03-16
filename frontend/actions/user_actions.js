import * as UserAPIUtil from '../util/user_api_util';

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS'

export const fetchAllUsers = users => {
    return {
        type: FETCH_ALL_USERS,
        users
    }
}

export const fetchUser = email => dispatch => {
    debugger
    return UserAPIUtil.fetchUser(email)
        .then(users => dispatch(fetchAllUsers(users)))
}