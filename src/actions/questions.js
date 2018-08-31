import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser,
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function answerQuestion ({qid, authedUser, answer}) {
    return {
        type: ANSWER_QUESTION,
        qid,
        authedUser,
        answer
    }
}

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))
        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn(`Error in handleAnswerQuestion: `, e)
                alert(`There was an error in answering the question. Try again.`)
            })
    }
}