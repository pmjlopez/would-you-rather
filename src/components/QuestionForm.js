import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from "../actions/questions"
import { userAnswer } from "../actions/users"

class QuestionForm extends Component {
    handleSelect = (e) => {
        const option = e.target.value
        const { dispatch, question, authedUser } = this.props
        dispatch(handleAnswerQuestion({
            qid: question.id,
            authedUser,
            answer: option
        }))
        dispatch(userAnswer({
            qid: question.id,
            authedUser,
            answer: option
        }))
    }
    render() {
        const OPTION_ONE = 'optionOne'
        const OPTION_TWO = 'optionTwo'
        const { optionOne, optionTwo } = this.props
        return (
            <Fragment>
                <div className='card-body'>
                    <h5 className='card-title'>Would you rather...</h5>
                </div>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <input
                            type='radio'
                            name='answer'
                            value={OPTION_ONE}
                            onChange={this.handleSelect}
                        />
                        {optionOne.text}
                    </li>
                    <li className='list-group-item'>
                        <input
                            type='radio'
                            name='answer'
                            value={OPTION_TWO}
                            onChange={this.handleSelect}
                        />
                        {optionTwo.text}
                    </li>
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]
    const optionOne = question.optionOne
    const optionTwo = question.optionTwo
    return {
        authedUser,
        optionOne,
        optionTwo,
        question
    }
}

export default connect(mapStateToProps)(QuestionForm)
