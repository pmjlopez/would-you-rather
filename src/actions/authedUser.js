import { saveAuthedUser, deleteAuthedUser } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const UNSET_AUTHED_USER = 'UNSET_AUTHED_USER'

function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function handleSetAuthedUser (id) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveAuthedUser(id)
            .then(() => dispatch(setAuthedUser(id)))
            .then(() => dispatch(hideLoading()))
            .catch((e) => {
                console.warn(`Error in handleSetAutheduser: `, e)
                alert(`There was an error in setting authenticated user. Try again.`)
                dispatch(hideLoading())
            })
    }
}

function unsetAuthedUser () {
    return {
        type: UNSET_AUTHED_USER
    }
}

export function handleUnsetAuthedUser () {
    return (dispatch) => {
        dispatch(showLoading())
        return deleteAuthedUser()
            .then(() => dispatch(unsetAuthedUser()))
            .then(() => dispatch(hideLoading()))
            .catch((e) => {
                console.warn(`Error in handleUnsetAutheduser: `, e)
                alert(`There was an error in deleting authenticated user. Try again.`)
                dispatch(hideLoading())
            })
    }
}
