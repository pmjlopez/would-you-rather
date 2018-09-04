import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option'

class QuestionResults extends Component {
    render () {
        const { optionOne, optionTwo, authedUser, total } = this.props
        return (
            <div className='card-body'>
                <Option
                    text={optionOne.text}
                    votes={optionOne.votes}
                    total={total}
                    authedUser={authedUser}
                />
                <Option
                    text={optionTwo.text}
                    votes={optionTwo.votes}
                    total={total}
                    authedUser={authedUser}
                />
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, questions }, {id}) {
    const question = questions[id]
    const optionOne = question.optionOne
    const optionTwo = question.optionTwo
    const total = [ ...optionOne.votes, ...optionTwo.votes ]
    return {
        authedUser,
        optionOne,
        optionTwo,
        total
    }
}

export default connect(mapStateToProps)(QuestionResults)
