import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from "../actions/questions"

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION :
            const id = action.info.qid
            const option = action.info.answer
            return {
                ...state,
                [id] : {
                    ...state[id],
                    [option]: {
                        ...state[id][option],
                        votes: state[id][option].votes.concat(action.info.authedUser)
                    },
                }
            }
        case ADD_QUESTION :
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default :
            return state
    }
}