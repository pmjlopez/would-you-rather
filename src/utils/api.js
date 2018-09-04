import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion,
    _saveAuthedUser,
    _deleteAuthedUser,
} from "./_DATA"

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
            users,
            questions,
        }
    ))
}

export function getUsers () {
    return Promise.all([
        _getUsers(),
    ]).then((data) => (data[0]))
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}

export function saveQuestion (info) {
    return _saveQuestion(info)
}

export function saveAuthedUser (id) {
    return _saveAuthedUser(id)
}

export function deleteAuthedUser () {
    return _deleteAuthedUser()
}