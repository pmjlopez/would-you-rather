export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWER = 'USER_ANSWER'
export const USER_QUESTION = 'USER_QUESTION'

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

export function userQuestion(info) {
    return {
        type: USER_QUESTION,
        info
    }
}