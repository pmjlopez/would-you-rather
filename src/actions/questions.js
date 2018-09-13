import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading'
import { userQuestion } from "./users"

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
            .then((question) => {
                dispatch(addQuestion(question))

                const info = {
                    questionId: question.id,
                    userId: authedUser
                }
                dispatch(userQuestion(info))
            })
            .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function answerQuestion (info) {
    return {
        type: ANSWER_QUESTION,
        info
    }
}

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAnswer(info)
            .then(() => dispatch(answerQuestion(info)))
            .then(() => dispatch(hideLoading()))
            .catch((e) => {
                console.warn(`Error in handleAnswerQuestion: `, e)
                alert(`There was an error in answering the question. Try again.`)
                dispatch(hideLoading())
            })
    }
}