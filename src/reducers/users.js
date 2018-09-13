import {RECEIVE_USERS, USER_ANSWER, USER_QUESTION} from "../actions/users"

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case USER_ANSWER :
            const { authedUser, qid, answer } = action.info
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        case USER_QUESTION :
            const { userId, questionId } = action.info
            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    questions: state[userId].questions.concat(questionId)
                }
            }
        default :
            return state
    }
}