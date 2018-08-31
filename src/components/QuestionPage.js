import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResults from './QuestionResults'
import QuestionForm from "./QuestionForm";

class QuestionPage extends Component {
    render() {
        const { user, question, authedUser } = this.props
        const { optionOne, optionTwo } = question
        const votedOne = optionOne.votes.includes(authedUser)
        const votedTwo = optionTwo.votes.includes(authedUser)

        return (
            <div className='card'>
                <div className='header'>
                    <p>{`${user.name} asks:`}</p>
                </div>
                <div className='content'>
                    <img src={user.avatarURL} alt={user.name}/>
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
    const question = questions[id]
    const user = users[question.author]
    return {
        authedUser,
        question,
        user
    }
}

export default connect(mapStateToProps)(QuestionPage)
