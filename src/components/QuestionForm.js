import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionForm extends Component {
    handleSelect = (e) => {
        console.log('Selected', e.target.value)
    }
    render() {
        const OPTION_ONE = 'optionOne'
        const OPTION_TWO = 'optionTwo'
        const { optionOne, optionTwo, authedUser } = this.props
        return (
            <form>
                <h4>Would you rather...</h4>
                <ul>
                    <li>
                        <input
                            type='radio'
                            name='answer'
                            value={OPTION_ONE}
                            onChange={this.handleSelect}
                        />
                        {optionOne.text}
                    </li>
                    <li>
                        <input
                            type='radio'
                            name='answer'
                            value={OPTION_TWO}
                            onChange={this.handleSelect}
                        />
                        {optionTwo.text}
                    </li>
                </ul>
            </form>
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
        optionTwo
    }
}

export default connect(mapStateToProps)(QuestionForm)
