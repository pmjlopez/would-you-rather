import { getUsers } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function handleReceiveUsers () {
    return (dispatch) => {
        dispatch(showLoading())
        return getUsers()
            .then((users) => dispatch(receiveUsers(users)))
            .then(() => dispatch(hideLoading()))
            .catch((e) => {
                console.warn('There was an error in handleReceiveUsers. Try again', e)
                alert(`There was an error in receiving users. Try again.`)
                dispatch(hideLoading())
            })
    }
}