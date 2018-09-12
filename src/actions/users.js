export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWER = 'USER_ANSWER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function userAnswer(info) {
    return {
        type: USER_ANSWER,
        info
    }
}
