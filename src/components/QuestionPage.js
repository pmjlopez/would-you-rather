import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResults from './QuestionResults'
import QuestionForm from "./QuestionForm";

class QuestionPage extends Component {
    render() {
        const { users, questions, authedUser, id } = this.props
        const question = questions[id]
        const { optionOne, optionTwo } = question
        const user = users[question.author]
        const votedOne = optionOne.votes.includes(authedUser)
        const votedTwo = optionTwo.votes.includes(authedUser)

        return (
            <div className='card text-dark'>
                <div className='card-header'>
                    <img
                        src={user.avatarURL}
                        alt={user.name}
                        className='card-header-avatar'
                    />
                    {`${user.name} asks:`}
                </div>
                {(votedOne || votedTwo) && (
                    <QuestionResults id={question.id}/>
                )}

                {!(votedOne || votedTwo) && (
                    <QuestionForm id={question.id}/>
                )}

            </div>
        );
    }
}

function mapStateToProps ({ authedUser, users, questions }, props) {
    const { id } = props.match.params
    return {
        authedUser,
        questions,
        users,
        id
    }
}

export default connect(mapStateToProps)(QuestionPage)
